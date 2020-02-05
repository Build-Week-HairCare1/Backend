require('dotenv').config();

const express = require('express');
const server = express();
const cors = require('cors');

const knexConnection = require('../database/dbConfig');

// const reviews = require('./review_router');
const stylists = require('./stylist_router');
const customers = require('./customer_router');

server.use(express.json());
server.use(cors());

// server.use('/api/reviews', reviews);
server.use('/api/stylists', stylists);
server.use('/api/customers', customers);

server.get('/', (req, res) => {
  res.send('Waiting for content...!');
});

module.exports = server;
