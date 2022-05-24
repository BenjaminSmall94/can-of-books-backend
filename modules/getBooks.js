'use strict';

const Book = require('../models/book');

async function getBooks (req, res, next) {
  let queryObject = {};
  if (req.query.title) {
    queryObject = {
      title: req.query.title,
    };
  }
  try {
    let results = await Book.find(queryObject);
    res.status(200).send(results);
  } catch (error) {
    next(error);
  }
}

module.exports = getBooks;
