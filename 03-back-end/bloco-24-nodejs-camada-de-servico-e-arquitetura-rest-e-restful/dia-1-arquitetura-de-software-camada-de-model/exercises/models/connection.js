require('dotenv').config();
const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: 'localhost',
  database: 'mysql_user_exercises'
});