exports.up = function(knex) {
  return knex.schema.createTable('reviews', reviews => {
    reviews.increments();

    reviews
      .integer('customer_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('customers')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');

    reviews
      .integer('stylist_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('stylists')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');

    reviews
      .string('title', 128)
      .notNullable()
      .unique();

    reviews.text('description', 256).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('reviews');
};
