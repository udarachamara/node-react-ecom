// Update with your config settings.
const config = require("config");

module.exports = {

  development: {
    client: "mysql",
    connection: {
      host: config.get('db.DB_HOST'),
      database: config.get('db.DB'),
      user: config.get('db.DB_USERNAME'),
      password: config.get('db.DB_PASSWORD')
    },
    pool: { min: 0, max: 7 }
  },

  staging: {
    client: "mysql",
    connection: {
      host: config.get('db.DB_HOST'),
      database: config.get('db.DB'),
      user: config.get('db.DB_USERNAME'),
      password: config.get('db.DB_PASSWORD')
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: "mysql",
    connection: {
      host: config.get('db.DB_HOST'),
      database: config.get('db.DB'),
      user: config.get('db.DB_USERNAME'),
      password: config.get('db.DB_PASSWORD')
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

// knex migrate:make create_users_table
// knex seed:make 01_users
// knex migrate:latest --env production  
// knex seed:run
