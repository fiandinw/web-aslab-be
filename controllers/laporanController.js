const asyncHandler = require('express-async-handler')
const Laporan = require('../models/laporanModel')

const getLaporan = asyncHandler(async (req, res) => {
  const laporans = await Laporan.find()
  res.status(200).json(laporans)
})

const postLaporan = asyncHandler(async (req, res) => {
  console.log(req.body)
  if (!req.body) {
    res.status(400)
    throw new Error('No Payload')
  }

  const laporan = await Laporan.create({
    nim: req.body.nim,
    catatan: req.body.catatan,
    luaran: req.body.luaran,
    dokumentasi: req.body.dokumentasi
  })

  res.status(200).json(laporan)
})

const putLaporan = asyncHandler(async (req, res) => {
  const laporan = await Laporan.findById(req.params.id)

  if (!laporan) {
    res.status(400)
    throw new Error('Laporan not found')
  }

  const updatedLaporan = await Laporan.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updatedLaporan)
})

const deleteLaporan = asyncHandler(async (req, res) => {
  const laporan = await Laporan.findById(req.params.id)

  if (!laporan) {
    res.status(400)
    throw new Error('Laporan not found')
  }

  await laporan.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getLaporan,
  postLaporan,
  putLaporan,
  deleteLaporan
}