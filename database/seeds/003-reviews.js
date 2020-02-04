exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('reviews').insert([
        {
          id: 1,
          title: 'Amazing stylist!!',
          description: 'Gabi is a phenomenal stylist. She brough so much color back to my dry, dull hair!',
          customer_id: 2,
          stylist_id: 3,
          stars: 0,
          photo_url: '',
        },

        {
          id: 1,
          title: 'Amazing stylist!!',
          description: 'Gabi is a phenomenal stylist. She brough so much color back to my dry, dull hair!',
          customer_id: 2,
          stylist_id: 3,
          stars: 0,
          photo_url: '',
        },

        {
          id: 1,
          title: 'Amazing stylist!!',
          description: 'Gabi is a phenomenal stylist. She brough so much color back to my dry, dull hair!',
          customer_id: 2,
          stylist_id: 3,
          stars: 0,
          photo_url: '',
        },

        {
          id: 1,
          title: 'Amazing stylist!!',
          description: 'Gabi is a phenomenal stylist. She brough so much color back to my dry, dull hair!',
          customer_id: 2,
          stylist_id: 3,
          stars: 0,
          photo_url: '',
        },
      ]);
    });
};
