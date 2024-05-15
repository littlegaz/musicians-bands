const {Sequelize, sequelize} = require('../db');
const { DataTypes } = require('sequelize');

// TODO - define the Song model
let Song = sequelize.define("Song", {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.INTEGER
} );

module.exports = {
    Song
};



// In /models/Song.js, define a Song model. The Song model should have the following properties:
// title: a string
// year: a number
// length: a number
