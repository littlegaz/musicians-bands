const path = require('path');
const { Sequelize, Model } = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.join (__dirname, "dbsqlite")
});

module.exports = {
    sequelize,
    Sequelize
};
