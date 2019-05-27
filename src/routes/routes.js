'use strict';

const pgHandlers = require('../lib/pg.js');
const mongoHandlers = require('../lib/mongo.js');
const createSearch = require('../middleware/google-search.js')
const newSearch = require('../middleware/new-search.js')
const notFound = require('../middleware/404.js')
const express = require('express');

const router = express.Router();

//add some kind of switch between mongo and sql
let routeHandling = mongoHandlers;

router.get('/', routeHandling.getBooks);
router.post('/searches', createSearch);
router.get('/searches/new', newSearch);
router.get('/books/:id', routeHandling.getBook);
router.post('/books', routeHandling.createBook);
router.put('/books/:id', routeHandling.updateBook);
router.delete('/books/:id', routeHandling.deleteBook);

router.get('*', notFound);

module.exports = router;
