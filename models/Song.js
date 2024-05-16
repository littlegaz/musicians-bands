const {Sequelize, sequelize} = require('../db');
const { DataTypes } = require('sequelize');

// TODO - define the Song model
let Song = sequelize.define("Song", {
    title: Sequelize.STRING,
    year: Sequelize.INTEGER,
    length: Sequelize.INTEGER,
} );

module.exports = {
    Song
};



// In /models/Song.js, define a Song model. The Song model should have the following properties:
// title: a string
// year: a number
// length: a number
