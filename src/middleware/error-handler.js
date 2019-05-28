'use strict';

module.exports = (error, request, response, next) => {
  response.render('pages/error', { error: error });
}
