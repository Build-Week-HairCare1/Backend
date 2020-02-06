const express = require('express');
const router = express.Router();
const customer = require('./customer_model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../auth/secrets');

//login

router.post('/login', (req, res) => {
  let { email, password } = req.body;
  customer
    .findByEmail(email)
    .first()
    .then(customer => {
      if (customer && bcrypt.compareSync(password, customer.password)) {
        const token = generateToken(customer);
        res.status(200).json({ id: customer.id, token });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
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

  return jwt.sign(payload, secrets.jwtSecret, options);
}

// register a new customer
router.post('/', (req, res) => {
  console.log(req.body);
  let { email, password, first_name, last_name, city, state } = req.body;

  const hash = bcrypt.hashSync(password, 12);
  customer
    .create({
      email: email,
      password: hash,
      first_name: first_name,
      last_name: last_name,
      city: city,
      state: state,
    })
    .then(savedCustomer => {
      res.status(201).json(savedCustomer);
    })

    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});
// get ALL customers
router.get('/', (req, res) => {
  customer
    .find()
    .then(customer => {
      res.json(customer);
    })
    .catch(err => res.send(err));
});

module.exports = router;
