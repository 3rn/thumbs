const pg = require('pg');

const config = {
  database: 'thumbs',
};

const client = new pg.Client(config);
client.connect();

// test connection
client.query('SELECT $1::text as name', ['Connected to db!'], function(err, res) {
  console.log(res.rows[0].name);
  client.end();
});

// start the postgres server: pg_ctl -D /usr/local/var/postgres start
// run: psql postgres
// create: database thumbs;
