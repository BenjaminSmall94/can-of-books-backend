'use strict';

const Book = require('../models/book');

async function deleteBooks (req, res, next) {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).send('book deleted');
  } catch (error) {
    next(error);
  }
}

module.exports = deleteBooks;
