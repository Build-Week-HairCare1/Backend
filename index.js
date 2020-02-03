require('dotenv').config();

const express = require('express');
const server = express();
const cors = require('cors');

const reviews = require('./api/review_router');
const stylists = require('./api/stylist_router');
const customers = require('./api/customer_router');

server.use(express.json());
server.use(cors());

server.use('/api/reviews', reviews);
server.use('/api/stylists', stylists);
server.use('/api/customers', customers);

server.get('/', (req, res) => {
  res.send('Quietly waiting for content...!');
});

const port = process.env.PORT || 4500;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));

module.exports = server;
