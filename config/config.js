const config = {
  development: {
    server: {
      port: 3000,
      host: 'localhost'
    },
    database: {
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'umang@123',
      database: 'test'
    },
  },
  test: {
    server: {
      port: 3000,
      host: 'localhost'
    },
    database: {
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'umang@123',
      database: 'test'
    },
  }
};

const env = process.env.NODE_ENV || 'development';

const configuration = config[env];

module.exports = configuration;