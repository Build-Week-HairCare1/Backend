const db = require('../database/dbConfig');

module.exports = {
  create,
  find,
  findById,
  findByEmail,
};

function create(customer) {
  return db('customers')
    .insert(customer, 'id')
    .then(ids => {
      [id] = ids;
      return findById(id);
    });
}

function find() {
  return db('customers').select('id', 'email', 'password');
}

function findById(id) {
  return db('customers')
    .where({ id })
    .first();
}

function findByEmail(email) {
  return db('customers')
    .where({ email })
    .first();
}
