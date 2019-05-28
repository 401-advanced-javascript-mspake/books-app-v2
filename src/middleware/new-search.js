'use strict';


function newSearch(request, response, next) {
  response.render('pages/searches/new');
}

module.exports = newSearch;
