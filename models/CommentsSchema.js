const mongoose = require('mongoose');

// This can only be done with collections of subdocs
// if it's a singular, you must do it inline
const CommentsSchema = new mongoose.Schema({
  content: { type: String },
  date: { type: Date, default: Date.now },
  firstName: { type: String },
  lastName: { type: String }
});

CommentsSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

module.exports = CommentsSchema;
