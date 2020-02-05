const express = require('express');
const router = express.Router();
const stylist = require('./stylist_model');
const bcrypt = require('bcryptjs');
const restricted = require('../auth/restrictedMiddleware');
const jwt = require('jsonwebtoken');
const secrets = require('../auth/secrets');

// Register a new stylist
router.post('/', (req, res) => {
  console.log(req.body);
  let {
    email,
    password,
    first_name,
    last_name,
    city,
    state,
    specialty,
    salon,
    years_experience,
    bio,
    facebook_url,
    instagram_url,
    twitter_url,
    phone,
    photo_url,
  } = req.body;

  const hash = bcrypt.hashSync(password, 12);
  stylist
    .create({
      email: email,
      password: hash,
      first_name: first_name,
      last_name: last_name,
      city: city,
      state: state,
      specialty: specialty,
      salon: salon,
      years_experience: years_experience,
      bio: bio,
      facebook_url: facebook_url,
      instagram_url: instagram_url,
      twitter_url: twitter_url,
      phone: phone,
      photo_url: photo_url,
    })
    .then(savedStylist => {
      res.status(201).json(savedStylist);
    })

    .catch(error => {
      res.status(500).json(error);
    });
});

//login
router.post('/login', (req, res) => {
  let { email, password } = req.body;
  stylist
    .findByEmail(email)
    .first()
    .then(stylist => {
      if (stylist && bcrypt.compareSync(password, stylist.password)) {
        const token = generateToken(stylist);
        res.status(200).json({ id: stylist.id, token });
      } else {
        res.status(401).json({ message: 'Invalid Stylist Credentials' });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    email: user.email,
  };
  const options = {
    expiresIn: '1d',
  };
  // bring in the secret from the secrets file
  return jwt.sign(payload, secrets.jwtSecret, options);
}

// findByID
router.get('/:id', restricted, (req, res) => {
  stylist
    .findById(req.params['id'])
    .then(stylist => res.status(200).json(stylist))
    .catch(error => res.status(500).send(error));
});

//delete
router.delete('/:id', restricted, (req, res) => {
  stylist
    .remove(req.params['id'])
    .then(reviews => res.status(200).json(reviews))
    .catch(error => res.status(500).send('Server Error'));
});

// update
router.put('/:id', restricted, (req, res) => {
  stylist
    .update(req.params['id'], req.body)
    .then(reviews => res.status(200).json(reviews))
    .catch(error => res.status(500).send(error));
});

// find by city
router.get('/location/:city', restricted, (req, res) => {
  stylist
    .findByCity(req.params['location'])
    .then(data => {
      if (data === undefined) {
        res.status(404).json({ message: 'Stylists with the specified location do not exist.' });
      } else {
        res.status(200).json(data);
      }
    })
    .catch(err => res.status(500).json({ error: 'The location information could not be retrieved.' }));
});

module.exports = router;
