'use strict';

const Book = require('../models/book');

async function getBooks (req, res, next) {
  try {
    console.log(req.params.id);
    await Book.findByIdAndDelete(req.params.id);
    res.status(204).send('book deleted');
  } catch (error) {
    next(error);
  }
}

module.exports = getBooks;
