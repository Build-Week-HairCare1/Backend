require('dotenv').config();

const express = require('express');
const server = express();

const registerapi = require('./api/0-registerapi');
const loginapi = require('./api/1-loginapi');

server.use('/api/register', registerapi);
server.use('/api/login', loginapi);

server.get('/', (req, res) => {
  res.send('Thinking...!');
});

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
