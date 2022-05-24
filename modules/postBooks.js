'use strict';

const Book = require('../models/book');

async function postBooks (req, res, next) {
  try {
    let createdBook = await Book.create(req.body);
    res.status(200).send(createdBook);
  } catch(error){
    next(error);
  }
}

module.exports = postBooks;
