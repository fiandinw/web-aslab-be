const mongoose = require('mongoose')

const laporanSchema = mongoose.Schema({
  // text: {
  //   type: String,
  //   required: [true, 'Please add text']
  // }
  nim: Number,
  catatan: String,
  luaran: String,
  dokumentasi: String
},{
  timestamps: true
})

module.exports = mongoose.model('Laporan', laporanSchema)