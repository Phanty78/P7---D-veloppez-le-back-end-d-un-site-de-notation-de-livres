const Book = require('../models/Book')

exports.getBooks = (req, res, next) => {
    Book.find().then(
      (books) => {
        res.status(200).json(books);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }

  exports.getBook = (req, res, next) => {
    Book.findOne
  }