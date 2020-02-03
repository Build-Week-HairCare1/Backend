const db = require('../data/db-config');

module.exports = {
  create,
  findById,
  findByUsername,
};

function create(customer) {
  return db('customers')
    .insert(customer)
    .then(ids => ({ id: ids[0] }));
}

function findById(id) {
  return db('customers')
    .where({ id })
    .first();
}

function findByUsername(username) {
  return db('customers')
    .where({ username })
    .first();
}
