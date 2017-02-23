
const config = {
  HOST: 'localhost', 
  PORT: process.env.PORT || 8000,

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
}

module.exports = config;