exports.up = function(knex) {
  return knex.schema.createTable('customers', customers => {
    customers.increments();

    customers
      .string('email', 128)
      .notNullable()
      .unique();

    customers.string('password', 128).notNullable();

    customers.string('first_name', 128).notNullable();

    customers.string('last_name', 128).notNullable();

    customers.string('city', 128).notNullable();

    customers.string('state', 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('customers');
};
