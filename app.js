const express = require('express');
const mongoose = require('mongoose')
const app = express();

const bookRoutes = require('./routes/book')
const userRoutes= require('./routes/user')

const mongoDB = 'mongodb+srv://testuser:mvpZ3PjR9KGEEAsc@cluster0.jjdtnp5.mongodb.net/';
mongoose.connect(mongoDB);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log("Connected successfully to MongoDB");
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/books', bookRoutes)
app.use('/api/auth', userRoutes)

module.exports = app;