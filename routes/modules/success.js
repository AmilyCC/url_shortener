const express = require('express')
const router = express.Router()
require('../../public/javascripts/copy')


//短網址顯示頁
router.get('/:id', (req, res) => {
  const host = req.get('host')
  const path = req.params.id
  const newUrl = `${host}/${path}`
  res.render('success',{newUrl})
})

module.exports = router