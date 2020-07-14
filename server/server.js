require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 5000

mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  err => {
    if (err) {
      console.log(`😇 => ${err}`)
      process.exit(1)
    }
    console.log(`📂 => connected to database`)
  }
)

app.use(express.json({ extended: false }))

app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

app.listen(port, () => console.log(`🌍 => ${port}`))
