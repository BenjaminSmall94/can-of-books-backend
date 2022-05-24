'use strict';

// Require
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL);

const Book = require('./models/book.js');

async function seed() {
  await Book.create({
    title: 'The Fellowship of the Ring',
    description: 'Sauron, the Dark Lord, has awakened and threatens to conquer Middle-earth. To stop this ancient evil once and for all, Frodo Baggins must destroy the One Ring in the fires of Mount Doom. Men, Hobbits, a wizard, an Elf, and a Dwarf form a fellowship to help him on his quest.',
    status: true,
  });
  await Book.create({
    title: 'The Boys in the Boat',
    description: 'The narrative follows the University of Washington rowing team\’s bid for gold at the 1936 Berlin Olympics amid the Great Depression and Adolf Hitler\’s rise to power.',
    status: true,
  });
  await Book.create({
    title: 'Harry Potter and the Philosopher\'s Stone',
    description: 'It follows the adventures of the unlikely hero Harry Potter, a lonely orphan who discovers that he is actually a wizard and enrolls in the Hogwarts School of Witchcraft and Wizardry.',
    status: true,
  });

  console.log('books added successfully');
  mongoose.disconnect();
}

seed();