module.exports = {
  development: {
    client: 'pg',
    version: '7.2',
    connection: {
      host: 'ec2-3-220-86-239.compute-1.amazonaws.com',
      user: 'quonubylmywbgo',
      password: 'c31f07f6045bfea0ae265662bd8434ea8bb2f6f6d6149aef33d7140bcf71561d',
      database: 'deonvnfdjo1c45',
      port: '5432',
    },
    useNullAsDefault: true,
    seeds: {
      directory: './database/seeds',
    },
  },
};
