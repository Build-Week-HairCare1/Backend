const db = require('../database/dbConfig');

module.exports = {
  findById,
  create,
  remove,
  update,
  findByLocation,
  findByUsername,
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

function findByLocation(location) {
  return db('stylists').where('stylists.location', location);
}

function findByUsername(username) {
  return db('stylists')
    .where({ username })
    .first();
}
