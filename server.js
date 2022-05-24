'use strict';

//Require
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBooks = require('./modules/getBooks.js');
const postBooks = require('./modules/postBooks.js');

//USE
const app = express();
app.use(cors());
app.use(express.json());
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

// Books ----------------
app.get('/books', getBooks);

app.post('/books', postBooks);
//--------------------------

app.get('/test', (request, response) => {
  response.send('test request received');
});

app.get('*', (req, res) => {
  res.status(404).send('Page does not exist');
});

// Errors

app.use((error, rec, res, next) => {
  res.status(500).send(error.message);
});

// Listener

app.listen(PORT, () => console.log(`listening on ${PORT}`));
