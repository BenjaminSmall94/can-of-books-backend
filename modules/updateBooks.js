'use strict';

const Book = require('../models/book');

async function updateBooks (req, res, next) {
  try {
    const { title, description, status } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, { title, description, status }, { new: true, overwrite: true });
    res.status(200).send(updatedBook);
  } catch (error) {
    next(error);
  }
}

module.exports = updateBooks;
