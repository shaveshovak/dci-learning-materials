const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthDate: Date,
    nationality: String,
    genres: [String],
    booksPublished: Number,
    active: Boolean,
    awards: [String],
    createdAt: Date,
})

module.exports = mongoose.model('Author', AuthorSchema, 'Authors') // = export ES6 = type: 'module'