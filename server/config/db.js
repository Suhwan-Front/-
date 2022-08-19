const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  ID: "test",
  Password: "1234",
  database: "loginSample",
});

module.exports = db;
