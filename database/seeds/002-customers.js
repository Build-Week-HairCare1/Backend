exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customers')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('customers').insert([
        {
          id: 1,
          first_name: 'Sam',
          last_name: 'Curtis',
          email: 'sc@gmail.com',
          password: 'sam123',
          city: 'San Jose',
          state: 'CA',
        },

        {
          id: 2,
          first_name: 'Samantha',
          last_name: 'Smith',
          email: 'ss@gmail.com',
          password: 'samantha123',
          city: 'Los Angeles',
          state: 'CA',
        },

        {
          id: 3,
          first_name: 'Courtney',
          last_name: 'Jones',
          email: 'court@gmail.com',
          password: 'court123',
          city: 'San Diego',
          state: 'CA',
        },

        {
          id: 4,
          first_name: 'Krista',
          last_name: 'Reed',
          email: 'Krista@gmail.com',
          password: 'krista123',
          city: 'Portland',
          state: 'OR',
        },
      ]);
    });
};
