'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
	name: String,
	description: String,
	value: Number,
	image: String
});

module.exports = mongoose.model('proyectos', ProjectSchema);
