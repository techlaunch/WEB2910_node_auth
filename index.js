const mongoose = require('mongoose');

const User = require('./models/user');
const Post = require('./models/post');

mongoose.connect('mongodb://yoda:Password@ds041150.mlab.com:41150/auth', err => {
  if (err) throw err;

  const email = 'rferrer@techlaunch.io';
  const password = 'hardPassword';

  User.attemptLogin(email, password, (err, user) => {
    console.log(user);
  });

  // Post.find({ 'author.name': 'Randy Ferrer' }, (err, post) => {
  //   if (err) throw err;

  //   const comment = post.comments.create({
  //     date: Date.now(),
  //     content: 'This is such an awesome comment. You rock!!',
  //     firstName: 'Joe',
  //     lastName: 'Jones'
  //   });

  //   post.comments.push(comment);

  // post.save(err => {
  //   if (err) throw err;

  //   console.log(post);

  //   process.exit();
  // });
  // });

  // const post = new Post({
  //   date: Date.now(),
  //   title: 'My Epic Post!',
  //   content: 'THis post could change the world it is so epic.',
  //   author: {
  //     name: 'Randy Ferrer',
  //     email: 'rferrer@techlaunch.io'
  //   }
  // });

  // post.save(err => {
  //   if (err) throw err;

  //   console.log(post);
  //   process.exit();
  // });

  // User.attemptLogin(email, password, (err, user) => {
  //   if (user) {
  //     console.log('You logged in as ', user.fullName);
  //   } else {
  //     console.log('Invalid username or password');
  //   }

  //   process.exit();
  // });

  // User.findByEmail(email, (err, user) => {
  //   if (err) throw err;

  //   const password = 'hardPassword';

  //   user.comparePassword(password, (err, isMatch) => {
  //     if (err) throw err;

  //     if (isMatch) {
  //       console.log('You are logged in!! Be happy!');
  //     } else {
  //       console.log('You are a sad person!');
  //     }
  //     process.exit();
  //   });
  // });

  // const query = {
  //   username: /rferrer/
  // };

  // User.findOne(query, (err, user) => {
  //   if (err) throw err;

  //   console.log(user.fullName);
  //   process.exit();
  // });

  // User.find({ email: 'rferrer@techlaunch.io' }, (err, user) => {
  //   if (err) throw err;

  //   console.log(user);
  //   process.exit();
  // });

  // User.findById('5abd8d552b21f3201d66c8f3', (err, user) => {
  //   if (err) throw err;

  //   console.log(user);
  //   process.exit();
  // });

  // create a new document using our model
  // const me = new User({
  //   firstName: 'Randy',
  //   lastName: 'Ferrer',
  //   username: 'rferrer',
  //   email: 'rferrer@techlaunch.io',
  //   password: 'hardPassword'
  // });

  // me.save(err => {
  //   if (err) throw err;

  //   User.find((err, users) => {
  //     if (err) throw err;

  //     console.log(users);
  //     process.exit();
  //   });
  // });
});
