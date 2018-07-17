const mongoose = require('mongoose');

const CommentsSchema = require('./CommentsSchema');

const PostSchema = new mongoose.Schema({
  date: { type: Date, required: true, default: Date.now },
  title: { type: String },
  content: { type: String },
  author: {
    name: { type: String },
    email: { type: String }
  },
  comments: [CommentsSchema]
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;
