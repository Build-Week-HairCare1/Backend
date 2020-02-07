const knex = require('knex');
const knexConfig = require('../knexfile');

module.exports = knex(process.env.DB_ENV || knexConfig.development);
