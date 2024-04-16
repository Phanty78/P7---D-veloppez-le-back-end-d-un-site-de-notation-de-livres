const express = require('express')
const router = express.Router()

const bookCtrl = require('../controllers/book')
const userCtrl = require('../controllers/user')

const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

router.get('/bestrating', bookCtrl.getBestRating)
router.get('/', bookCtrl.getBooks)
router.get('/:id', bookCtrl.getBook)
router.post('/', auth, multer, bookCtrl.saveNewBook)
router.delete('/:id', auth, bookCtrl.deleteBook)
router.put('/:id', auth, multer, bookCtrl.updateBook)
router.post('/:id/rating', auth, bookCtrl.ratingBook)

module.exports = router