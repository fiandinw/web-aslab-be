const mongoose = require('mongoose')

const asistenSchema = mongoose.Schema({
  // text: {
  //   type: String,
  //   required: [true, 'Please add text']
  // }
  nim: Number,
  password: String,
  nama: String,
  email: String,
  statusAsisten: Boolean
},{
  timestamps: true
})

module.exports = mongoose.model('Asisten', asistenSchema)