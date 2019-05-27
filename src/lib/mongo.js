'use strict';

const bookModel = require('../models/book/book-model.js')
const mongoose = require('mongoose');
const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);


function getBooks(request,response,next) {
  bookModel.get().then( data => {
    if (data.rowCount === 0) {
      response.render('pages/searches/new');
    } else {
      response.render('pages/index', { books: data })
    }
  })
    .catch(err => next(err));
}

function getBook(request,response,next) {
  console.log(request.params)
  console.log(request.params.id)
  bookModel.get(request.params.id)
    .then(result => {
      response.render('pages/books/show', { book: result[0], bookshelves: ['none'] })
    })
    .catch(err => next(err));
}

function createBook(request,response,next) {
  bookModel.post(request.body)
    .then(result => {
      response.redirect(`/books/${result._id}`)
    })
    .catch(err => next(err));
}

function updateBook(request,response,next) {
  bookModel.put(request.params.id, request.body)
    .then(response.redirect(`/books/${request.params.id}`))
    .catch(err => next(err));
}

function deleteBook(request,response,next) {
  console.log(request.params.id)
  bookModel.delete(request.params.id)
    .then(response.redirect('/'))
    .catch(err => next(err));
}

module.exports = {
  getBooks: getBooks,
  getBook: getBook,
  createBook: createBook,
  updateBook: updateBook,
  deleteBook: deleteBook
}
