'use strict';

const Book = require('../src/models/book/book-model.js')
const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Book data model', () => {
  const book = Book;

  const testEntry = {
    title: 'Test',
    author: 'Anon',
    description: 'a pretend test book',
    image_url: 'test.jpg',
    isbn: 1234567890,
    bookshelf: 'test'
  };

  const updateInfo = {
    title: 'Updated',
    author: 'Anon',
    description: 'I am an updated entry',
    image_url: 'test.jpg',
    isbn: 1234567890,
    bookshelf: 'test'
  };

  let retrievedEntry;


  describe('it has a post method', () => {
    it('given a valid entry, posting returns the newly made entry', () => {
      return book.post(testEntry)
        .then(result => {
          expect(result.title === testEntry.title).toBeTruthy();
        });
    });

  });

  describe('it has a get method', () => {

    it('getting should return an array', () => {
      return book.get().then( result => {
        retrievedEntry = result[0];
        expect(result).toBeInstanceOf(Array);
        expect(result[0]).toHaveProperty('title');
        expect(result[0]).toHaveProperty('_id');
      });
    });

    it('get can return a single entry by id', () => {
      return book.get(retrievedEntry._id).then( result => {
        expect(result[0].name).toEqual(testEntry.name);
      });
    });

    it('getting an id that doesn\'t exist returns an error', () => {
      return book.put(12740851, updateInfo).then()
        .catch(err => {
          expect(err).toBeDefined();
        });
    });

  });

  describe('it has a put method', () => {
    it('given a valid id, it updates the information if an entry', () => {
      return book.put(retrievedEntry._id, updateInfo).then( result => {
        expect(result.name).toEqual(updateInfo.name);
      });
    });

    it('updating an id that doesn\'t exist returns an error', () => {
      return book.put(12740851, updateInfo).then()
        .catch(err => {
          expect(err).toBeDefined();
        });
    });
  });

  describe('it has a delete method', () => {
    it('given a valid id, it will delete the entry at that id', () => {
      return book.delete(retrievedEntry._id).then( result => {
        expect(result.name).toEqual(updateInfo.name);
      });
    });

    it('getting the deleted entry returns an empty array', () => {
      return book.get(retrievedEntry._id).then(result => {
        expect(result[0]).toBeFalsy();
      });
    });
  });

});
