const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
  //to print from other page
res.render('index')
})

module.exports = router