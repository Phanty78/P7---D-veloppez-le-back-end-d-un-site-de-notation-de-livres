const Book = require('../models/Book')

exports.getBooks = (req, res, next) => {
    Book.find()
      .then((books) => {res.status(200).json(books)})
      .catch((error) => {res.status(400).json({error: error})})
  }

  exports.getBook = (req, res, next) => {
    Book.findOne({ _id: req.params.id })
      .then((book) => res.status(200).json(book))
      .catch(error => res.status(404).json({ error }))
  }

  exports.getBestRating = (req, res, next) => {
    let bestBooksRating = []
    let allRating = []
    Book.find()
      .then((books) => {
        res.status(200).json(books)
        books.forEach(book => {
          allRating.push(book.averageRating)
        })
        bestBooksRating = allRating.slice().sort((a, b) => b - a)
        return bestBooksRating = bestBooksRating.slice(0,3)
      })
      .catch((error) => {res.status(400).json({error: error})})
  }

  exports.saveNewBook = (res, req, next) => {
    const bookObject = JSON.parse(req.body.book);
    delete bookObject._id;
    delete bookObject._userId;
    const book = new Book({
        ...bookObject,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
  
    thing.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
    .catch(error => { res.status(400).json( { error })})
  }
