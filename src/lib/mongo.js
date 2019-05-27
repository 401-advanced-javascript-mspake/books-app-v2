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

// function getBook(request, response, next) {
//   getBookshelves()
//     .then(shelves => {

//       let SQL = 'SELECT books.*, bookshelves.name FROM books INNER JOIN bookshelves on books.bookshelf_id=bookshelves.id WHERE books.id=$1;';
//       let values = [request.params.id];
//       client.query(SQL, values)
//         .then(result => {
//           console.log(shelves.rows)
//           response.render('pages/books/show', { book: result.rows[0], bookshelves: shelves.rows })
//         })
//         .catch(err => next(err));
//     })
// }
function getBook(request,response,next) {
  console.log(request.params)
  console.log(request.params.id)
  bookModel.get(request.params.id)
    .then(result => {
      console.log(result)
      // console.log(shelves.rows)
      response.render('pages/books/show', { book: result[0], bookshelves: ['none'] })
    })
    .catch(err => next(err));
}

// function createBook(request, response, next) {
//   console.log(request.body.bookshelf);
//   createShelf(request.body.bookshelf)
//     .then(id => {
//       let { title, author, isbn, image_url, description } = request.body;
//       let SQL = 'INSERT INTO books(title, author, isbn, image_url, description, bookshelf_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING id;';
//       let values = [title, author, isbn, image_url, description, id];

//       client.query(SQL, values)
//         .then(result => response.redirect(`/books/${result.rows[0].id}`))
//         .catch(err => next(err));
//     })

// }
function createBook(request,response,next) {
  bookModel.post(request.body)
    .then(result => {
      console.log(result)
      response.redirect(`/books/${result._id}`)
    })
    .catch(err => next(err));
}

// function updateBook(request, response, next) {
//   let { title, author, isbn, image_url, description, bookshelf_id } = request.body;
//   // let SQL = `UPDATE books SET title=$1, author=$2, isbn=$3, image_url=$4, description=$5, bookshelf=$6 WHERE id=$7;`;
//   let SQL = `UPDATE books SET title=$1, author=$2, isbn=$3, image_url=$4, description=$5, bookshelf_id=$6 WHERE id=$7;`;
//   let values = [title, author, isbn, image_url, description, bookshelf_id, request.params.id];

//   client.query(SQL, values)
//     .then(response.redirect(`/books/${request.params.id}`))
//     .catch(err => next(err));
// }
function updateBook(request,response,next) {
  bookModel.put(request.params.id, request.body)
    .then(response.redirect(`/books/${request.params.id}`))
    .catch(err => next(err));
}

// function deleteBook(request, response, next) {
//   let SQL = 'DELETE FROM books WHERE id=$1;';
//   let values = [request.params.id];

//   return client.query(SQL, values)
//     .then(response.redirect('/'))
//     .catch(err => next(err));
// }
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
