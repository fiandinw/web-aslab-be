const asyncHandler = require('express-async-handler')
const Asisten = require('../models/asistenModel')

const getAsisten = asyncHandler(async (req, res) => {
  const asistens = await Asisten.find()
  res.status(200).json(asistens)
})

const postAsisten = asyncHandler(async (req, res) => {
  console.log(req.body)
  if (!req.body) {
    res.status(400)
    throw new Error('No Payload')
  }

  const asisten = await Asisten.create({
    nim: req.body.nim,
    password: req.body.password,
    nama: req.body.nama,
    email: req.body.email,
    statusAsisten: req.body.statusAsisten
  })

  res.status(200).json(asisten)
})

const putAsisten = asyncHandler(async (req, res) => {
  const asisten = await Asisten.findById(req.params.id)

  if (!asisten) {
    res.status(400)
    throw new Error('Asisten not found')
  }

  const updatedAsisten = await Asisten.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updatedAsisten)
})

const deleteAsisten = asyncHandler(async (req, res) => {
  const asisten = await Asisten.findById(req.params.id)

  if (!asisten) {
    res.status(400)
    throw new Error('Asisten not found')
  }

  await asisten.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getAsisten,
  postAsisten,
  putAsisten,
  deleteAsisten
}