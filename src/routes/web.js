
const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
  res.send('Hello World & ThucTD')
})
router.get('/thuctd', (req, res) => {
 res.render('sample.ejs')
})

module.exports = router;