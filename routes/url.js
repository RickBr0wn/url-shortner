const express = require('express')
const validUrl = require('valid-url')
const shortid = require('shortid')

const Url = require('../models/Url')

const router = express.Router()

// @route   POST  /api/url/shorten
// @desc    Create a short URL
router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body
  const urlCode = shortid.generate()

  if (!validUrl.isUri(process.env.PROXY)) {
    return res.status(401).json('invalid base url')
  }

  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl })

      if (url) {
        res.json(url)
      } else {
        const shortUrl = `${process.env.PROXY}/${urlCode}`
        console.log(shortUrl)
        url = new Url({ longUrl, shortUrl, urlCode, date: new Date() })
        await url.save()
        res.json(url)
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({
        end_point: 'https://localhost:5000/api/url/shorten',
        message: 'Error',
        error,
      })
    }
  } else {
    return res.status(401).json('invalid long url')
  }
})

module.exports = router
