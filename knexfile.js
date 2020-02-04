module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/db.db3',
    },
    useNullAsDefault: true,
    seeds: {
      directory: './database/seeds',
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/db.db3',
    },
    useNullAsDefault: true,
    seeds: {
      directory: './database/seeds',
    },
  },
};
