const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middlewares/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const cors = require('cors')

connectDB()
const app = express()

// debugger
// app.use('/api',(req, res, next) => {
//   // console.log(req)

//   next()
// })

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/laporan', require('./routes/laporanRoutes'))
app.use('/api/asisten', require('./routes/asistenRoutes'))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Aslab UPI Cibiru API listening on port ${port}`)
})