exports.up = function(knex) {
  return knex.schema.createTable('stylists', stylists => {
    stylists.increments();

    stylists
      .string('email', 128)
      .notNullable()
      .unique();

    stylists.string('password', 128).notNullable();

    stylists.string('first_name', 128).notNullable();

    stylists.string('last_name', 128).notNullable();

    stylists.string('city', 128).notNullable();

    stylists.string('state', 128).notNullable();

    stylists.string('specialty', 128).notNullable();

    stylists.string('salon', 128).notNullable();

    stylists.integer('years_experience').notNullable();

    stylists.string('phone', 128).notNullable();

    stylists.string('photo_url', 128).notNullable();

    stylists.string('bio', 128).notNullable();

    stylists.string('facebook_url', 128);

    stylists.string('instagram_url', 128);

    stylists.string('twitter_url', 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stylists');
};
