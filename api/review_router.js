const express = require('express');
const router = express.Router();
const review = require('./review_model');
const restricted = require('../auth/restrictedMiddleware');

// Get by stylist_id
router.get('/stylist/:stylist_id', restricted, (req, res) => {
  review
    .findByStylist(req.params['stylist_id'])
    .then(reviews => res.status(200).json(reviews))
    .catch(error => res.status(500).send('Server Error'));
});

// get by customer_id
router.get('/customer/:customer_id', restricted, (req, res) => {
  review
    .findByCustomer(req.params['customer_id'])
    .then(reviews => res.status(200).json(reviews))
    .catch(error => res.status(500).send('Server Error'));
});

//delete
router.delete('/:id', restricted, (req, res) => {
  review
    .remove(req.params['id'])
    .then(reviews => res.status(200).json(reviews))
    .catch(error => res.status(500).send('Server Error'));
});

// update
router.put('/:id', restricted, (req, res) => {
  review
    .update(req.params['id'], req.body)
    .then(reviews => res.status(200).json(reviews))
    .catch(error => res.status(500).send(error));
});

// create
router.post('/', restricted, (req, res) => {
  review
    .create(req.body)
    .then(reviews => res.status(200).json(reviews))
    .catch(error => res.status(500).send('Server Error'));
});

module.exports = router;
