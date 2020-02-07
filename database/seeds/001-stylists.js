exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stylists')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('stylists').insert([
        {
          id: 1,
          email: 'delaine@gmail.com',
          first_name: 'Delaine',
          last_name: 'Maki',
          password: '2020',
          city: 'Florence',
          state: 'MT',
          phone: '340-958-0092',
          salon: 'Just Teasin',
          years_experience: 10,
          specialty: 'blonde hair',
          photo_url: '',
          bio: 'I love what I do!',
          facebook_url: '',
          instagram_url: '',
          twitter_url: '',
        },
        {
          id: 2,
          email: 'M@gmail.com',
          first_name: 'Mel',
          last_name: 'Rackham',
          password: '2019',
          city: 'Colorado Springs',
          state: 'CO',
          phone: '342-958-0092',
          salon: 'Just Teasin',
          years_experience: 10,
          specialty: 'blonde hair',
          photo_url: '',
          bio: 'I love what I do!',
          facebook_url: '',
          instagram_url: '',
          twitter_url: '',
        },

        {
          id: 3,
          email: 'gabi@gabi.com',
          first_name: 'Gabi',
          last_name: 'Black',
          password: '2017',
          city: 'Great Falls',
          state: 'MT',
          phone: '340-098-0092',
          salon: 'Super Cuts',
          years_experience: 12,
          specialty: 'thick hair',
          photo_url: '',
          bio: 'I really love what I do!',
          facebook_url: '',
          instagram_url: '',
          twitter_url: '',
        },

        {
          id: 4,
          email: 'icuthair@gmail.com',
          first_name: 'Tiffany',
          last_name: 'Smith',
          password: '2018',
          city: 'Missoula',
          state: 'MT',
          phone: '390-958-0092',
          salon: '406 Salon',
          years_experience: 6,
          specialty: 'curly hair',
          photo_url: '',
          bio: 'I really really love what I do!',
          facebook_url: '',
          instagram_url: '',
          twitter_url: '',
        },
      ]);
    });
};
