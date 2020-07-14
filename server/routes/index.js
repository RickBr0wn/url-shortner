const express = require('express')
const Url = require('../models/Url')

const router = express.Router()

/**
 * @route   GET /:code
 * @desc    Redirect to long url
 */
router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code })

    if (url) {
      res.redirect(url.longUrl)
    } else {
      return res.status(404).json({
        end_point: `${process.env.PROXY}/${req.params.code}`,
        message: 'No found in database',
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      end_point: `${process.env.PROXY}/${req.params.code}`,
      message: 'Error',
      error,
    })
  }

  return res.status(200).json()
})

module.exports = router
