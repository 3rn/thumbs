
const config = {
  HOST: process.env.HOST || 'localhost', 
  PORT: process.env.PORT || 8081,

  env: process.env.NODE_ENV || '', // default

  // Environments
  dev: 'development',
  testing: 'testing',
  staging: 'staging',
  prod: 'production',

  // Database
  database: {
    local: '',
    postgresql: ''
  }
};

module.exports = config;