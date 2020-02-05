const db = require('../database/dbConfig');

module.exports = {
  create,
  findByStylist,
  findByCustomer,
  remove,
  update,
};

function create(review) {
  return db('reviews')
    .insert(review)
    .then(ids => ({ id: ids[0] }));
}

function findByStylist(stylist_id) {
  return db('reviews').where('stylist_id', stylist_id);
}

function findByCustomer(customer_id) {
  return db('reviews').where('customer_id', customer_id);
}

function remove(id) {
  return db('reviews')
    .where('id', id)
    .del();
}

function update(id, review) {
  return db('reviews')
    .where('id', id)
    .update(review);
}
