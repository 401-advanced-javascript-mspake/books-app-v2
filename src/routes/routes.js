'use strict';

const routeHandling = require('../lib/pg.js');
const notFound = require('../middleware/404.js')
const express = require('express');

const router = express.Router();


router.get('/', routeHandling.getBooks);
router.post('/searches', routeHandling.createSearch);
router.get('/searches/new', routeHandling.newSearch);
router.get('/books/:id', routeHandling.getBook);
router.post('/books', routeHandling.createBook);
router.put('/books/:id', routeHandling.updateBook);
router.delete('/books/:id', routeHandling.deleteBook);

router.get('*', notFound);

module.exports = router;
