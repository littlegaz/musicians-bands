const {Sequelize, sequelize} = require('../db');
const { DataTypes } = require('sequelize');

// TODO - define the Band model
let Band = sequelize.define("Band", {
    name: DataTypes.STRING,
    genre: DataTypes.STRING
});

module.exports = {
    Band
};



// In /models/Band.js, define a Band model. The Band model should have the following properties:
// name: a string
// genre: a string