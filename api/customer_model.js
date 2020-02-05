const db = require('../database/dbConfig');

module.exports = {
  create,
  findById,
  findByEmail,
};

function create(customer) {
  return db('customers').insert(customer, 'id');
}
// .then(ids => ({ id: ids[0] }));

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
