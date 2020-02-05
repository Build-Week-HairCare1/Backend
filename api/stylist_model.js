const db = require('../data/dbConfig');

module.exports = {
  findById,
  create,
  remove,
  update,
  findByCity,
  findByEmail,
};

function findById(id) {
  return db('stylists')
    .where({ id })
    .first();
}

async function create(stylist) {
  const [id] = await db('stylists').insert(stylist);
  return findById(id);
}

function remove(id) {
  return db('stylists')
    .where('id', id)
    .del();
}

function update(id, stylist) {
  return db('stylists')
    .where('id', id)
    .update(stylist);
}

function findByCity(city) {
  return db('stylists').where('stylists.city', city);
}

function findByEmail(email) {
  return db('stylists')
    .where({ email })
    .first();
}
