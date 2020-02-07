exports.seed = function(knex) {
  return knex('reviews')
    .truncate()
    .then(function() {
      return knex('reviews').insert([
        {
          title: 'Amazing stylist!!',
          description: 'Gabi is a phenomenal stylist. She brough so much color back to my dry, dull hair!',
          customer_id: 2,
          stylist_id: 1,
        },

        {
          title: 'She is the best!!',
          description: 'Gabi is a phenomenal stylist. She brough so much color back to my dry, dull hair!',
          customer_id: 1,
          stylist_id: 1,
        },

        {
          title: 'stylist!!',
          description: 'Gabi is a phenomenal stylist. She brough so much color back to my dry, dull hair!',
          customer_id: 3,
          stylist_id: 1,
        },

        {
          title: 'Amazing!!',
          description: 'Gabi is a phenomenal stylist. She brough so much color back to my dry, dull hair!',
          customer_id: 1,
          stylist_id: 3,
        },
      ]);
    });
};
