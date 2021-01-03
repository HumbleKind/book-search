const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  description: { type: String, required: true },
  image: { data: Buffer, contentType: String, default: 'image' },
  link: { type: String, required: true }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
