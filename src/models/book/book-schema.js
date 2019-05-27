'use strict';

// id SERIAL PRIMARY KEY,
// title VARCHAR(255),
// author VARCHAR(255),
// description TEXT,
// image_url VARCHAR(511),
// isbn VARCHAR(255),
// bookshelf VARCHAR(255)

const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

// require('mongoose-schema-jsonschema')(mongoose);

const book = mongoose.Schema({
  title: { type:String, required:true },
  author: { type:String, required:true },
  description: { type:String },
  image_url: { type:String },
  isbn: { type:String },
  bookshelf: { type:String }
});

module.exports = mongoose.model('book', book);
