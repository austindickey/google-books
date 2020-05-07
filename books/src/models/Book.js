const mongoose = require("mongoose")

const Schema = mongoose.Schema

const bookSchema = new Schema({
  bookLink: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: String,
  authors: String,
  description: String,
  bookImg: String,
  publishedDate: { type: String, required: true },
  saved: {type: Boolean, default: false},
  addedDate: { type: Date, default: Date.now }
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book