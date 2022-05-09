const express = require('express')
const router = express.Router()
const { getLaporan, postLaporan, putLaporan, deleteLaporan } = require('../controllers/laporanController')

router.route('/').get(getLaporan).post(postLaporan)
router.route('/:id').put(putLaporan).delete(deleteLaporan)

module.exports = router