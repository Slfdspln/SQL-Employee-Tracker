// Connects JavaScript and Sequelize
require('dotenv').config();
const Sequelize = require("sequelize");

var sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "127.0.0.1",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;