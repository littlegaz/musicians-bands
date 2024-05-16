const {Sequelize, sequelize} = require('../db');
const { DataTypes } = require('sequelize');

// TODO - define the Musician model
let Musician = sequelize.define("Musician", {
    name: Sequelize.STRING,
    instrument: Sequelize.STRING,
});

module.exports = {
    Musician
};



// In /models/Musician.js, define a Musician model. The Musician model should have the following properties:
// name: a string
// instrument: a string