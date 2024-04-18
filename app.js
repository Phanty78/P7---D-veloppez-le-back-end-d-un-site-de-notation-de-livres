const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
const path = require("path");

const bookRoutes = require('./routes/book')
const userRoutes= require('./routes/user')

const mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jjdtnp5.mongodb.net/`
mongoose.connect(mongoDB);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log("Connected successfully to MongoDB");
});

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use("/images", express.static(path.join(__dirname, "images")));
app.use('/api/books', bookRoutes)
app.use('/api/auth', userRoutes)

module.exports = app;