![CF](http://i.imgur.com/7v5ASc8.png) LAB  
=================================================  
  
## Book App V2  
  
### Author: Morgana Spake  
  
### Links and Resources  
* [submission PR](https://github.com/401-advanced-javascript-mspake/books-app-v2/pull/1)  
* [travis](https://www.travis-ci.com/401-advanced-javascript-mspake/books-app-v2)  
  
<!-- #### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)
* [styleguide](http://xyz.com) (React assignments) -->
  
### Modules  
#### `server.js, routes.js, 404.js, error-handler.js, method-override-callback.js, new-search.js, model,js, book-model.js, book-schema.js, mongo.js, pg.js`  
  
##### Exported Values and Methods  
  
###### `server -> express server`  
###### `routes -> express Router instance`   
###### `404 -> middelware`  
###### `error-handler -> middelware error handler`  
###### `method-pverride-callback -> middelware`  
###### `new-search -> middelware`  
###### `model -> Model class constructor`  
###### `book-model -> new instance of the Book class`  
###### `book-schema -> mongoose schema`  
###### `mongo.js -> objecct containing mongo database functions`  
###### `pg.js -> objecct containing postgres database functions`  

### Setup  
#### `.env` requirements  
* `PORT` - Port Number  
* `MONGODB_URI` - URL to the running mongo instance/db  
* `DATABASE_URL` - URL to the running postgres instance/db  
  
#### Running the app  
* `npm start`  
* Endpoint: `/`  
* Endpoint: `/searches`  
* Endpoint: `/searches/new`    
* Endpoint: `/books`  
* Endpoint: `/books/:id`  
   
#### Tests  
* How do you run tests?  `npm run test`  
* What assertions were made?  
  - It has a post method  
  - It has a get method  
  - It has a put method  
  - It has a delete method  
  
#### UML   
![uml](https://github.com/401-advanced-javascript-mspake/books-app-v2/blob/refactoring/assets/uml.jpg)