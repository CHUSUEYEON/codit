"use strict";

const Sequelize = require("sequelize");

let config = require(__dirname + "/../config/config.json")["development"];
const db = {};

console.log("config >>>>", config);

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.File = require("./File")(sequelize, Sequelize);
module.exports = db;
