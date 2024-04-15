const express = require('express')
const router = express.Router()

const bookCtrl = require('../controllers/book')

const auth = require('../middleware/auth')


router.get('/', bookCtrl.getBooks)
router.get('/:id', bookCtrl.getBook)
router.get('/bestrating', bookCtrl.getBestRating)
/*
router.post('/', auth, multer, bookCtrl.saveNewBook)
router.put('/:id', auth, multer, bookCtrl.updateBook)
router.delete('/:id', auth, bookCtrl.deleteBook)
router.post('/:id/rating', auth, bookCtrl.ratingbook)
*/

module.exports = router