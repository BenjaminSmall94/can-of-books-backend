'use strict';

//Require
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBooks = require('./modules/getBooks.js');

//USE
const app = express();
app.use(cors());
mongoose.connect(process.env.DB_URL);

//Validation
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('mongoose is connected');
});

const PORT = process.env.PORT || 3002;

// Routes

app.get('/', (req, res) => {
  res.status(200).send('Hello World, what do you like to do for fun?');
});

app.get('/books', getBooks);

app.get('/test', (request, response) => {
  response.send('test request received');
});

app.get('*', (req, res) => {
  res.status(404).send('Page does not exist');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
