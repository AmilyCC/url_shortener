const express = require('express')
const router = express.Router()

const URL = require('../../models/url')
const generateUrl = require('../../public/javascripts/generate_url')
router.use('/static', express.static('public'));

//首頁路由
router.get('/', (req, res) => {
  res.render('index')
})
//輸入你的網址
router.post('/', (req, res) => {
  const host = req.get('host')
  const yourUrl = req.body.yourUrl
  let id = ''
  URL.findOne({yourUrl:yourUrl})
    .lean()
    .then(
      url => {
      if(url){
        id = url.id
      }else{
        id = generateUrl()
        const newUrl =`${host}/${id}`
        URL.create({yourUrl,id,newUrl})
        }
      })
    .then(() => res.redirect(`/success/${id}`))
    .catch(error => console.log(error))
  })

//新網址跳轉
router.get('/xeWH3', (req, res) => {
    res.redirect('https://www.netflix.com/browse')
    // const id = req.params.id
    // URL.find({id: id})
    //   .lean()
    //   .then((url) => {
    //     const reUrl = url[0]
    //     if(!reUrl){}
    //     else{
    //       let yourUrl = reUrl.yourUrl
    //     res.redirect(yourUrl)
    //     }
    //   }      
    //   )
      .catch(error => console.log(error))
})

module.exports = router