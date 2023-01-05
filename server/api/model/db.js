const mysql = require('mysql');
const { host, user, password, database, timezone } = require('./conf');

const db = mysql.createPool({
  host,
  user,
  password,
  database,
  timezone,
});

module.exports = db;
