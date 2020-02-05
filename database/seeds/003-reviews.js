exports.seed = function(knex) {
  return knex('reviews')
    .truncate()
    .then(function() {
      return knex('reviews').insert([
        {
          id: 1,
          title: 'Amazing stylist!!',
          description: 'Gabi is a phenomenal stylist. She brough so much color back to my dry, dull hair!',
          customer_id: 2,
          stylist_id: 3,
          stars: 0,
        },

        {
          id: 1,
          title: 'Amazing stylist!!',
          description: 'Gabi is a phenomenal stylist. She brough so much color back to my dry, dull hair!',
          customer_id: 2,
          stylist_id: 3,
          stars: 0,
        },

        {
          id: 1,
          title: 'Amazing stylist!!',
          description: 'Gabi is a phenomenal stylist. She brough so much color back to my dry, dull hair!',
          customer_id: 2,
          stylist_id: 3,
          stars: 0,
        },

        {
          id: 1,
          title: 'Amazing stylist!!',
          description: 'Gabi is a phenomenal stylist. She brough so much color back to my dry, dull hair!',
          customer_id: 2,
          stylist_id: 3,
          stars: 0,
        },
      ]);
    });
};
