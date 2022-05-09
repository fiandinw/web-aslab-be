const express = require('express')
const router = express.Router()
const { getAsisten, postAsisten, putAsisten, deleteAsisten } = require('../controllers/asistenController')

router.route('/').get(getAsisten).post(postAsisten)
router.route('/:id').put(putAsisten).delete(deleteAsisten)

module.exports = router