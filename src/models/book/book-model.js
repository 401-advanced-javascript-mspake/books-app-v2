'use strict';


const Model = require('../model.js');
const schema = require('./book-schema.js');

class Book extends Model {}

module.exports = new Book(schema);
