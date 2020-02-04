const express = require('express');
const router = express.Router();
const stylist = require('./stylist_model');
const bcrypt = require('bcryptjs');
const restricted = require('../auth/restrictedMiddleware');
const jwt = require('jsonwebtoken');
const secrets = require('../auth/secrets');

//login

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

// findByLocation
router.get('/location/:location', restricted, (req, res) => {
  stylist
    .findByLocation(req.params['location'])
    .then(data => {
      if (data === undefined) {
        res.status(404).json({ message: 'Stylists with the specified location do not exist.' });
      } else {
        res.status(200).json(data);
      }
    })
    .catch(err => res.status(500).json({ error: 'The location information could not be retrieved.' }));
});

// Register
router.post('/', (req, res) => {
  console.log(req.body);
  let { name, username, password, location, specialty, bio, email_address } = req.body;

  const hash = bcrypt.hashSync(password, 12); // it's 2 ^ 8, not 8 rounds
  stylist
    .create({
      name: name,
      username: username,
      password: hash,
      location: location,
      specialty: specialty,
      bio: bio,
      email_address: email_address,
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
  let { username, password } = req.body;
  stylist
    .findByUsername(username)
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
    username: user.username,
  };
  const options = {
    expiresIn: '1d',
  };
  // bring in the secret from the secrets file
  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
