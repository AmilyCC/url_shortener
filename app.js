const express = require('express');
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;
const URL = require('./models/url')
const generateUrl = require('./public/javascripts/generate_url')


require('./config/mongoose')
require('./public/javascripts/copy')
app.engine('hbs',exphbs({defaultLayout:'main', extname:'.hbs'}))
app.set('view engine','hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use('/static', express.static('public'));

//首頁路由
app.get('/', (req, res) => {
  res.render('index')
})
//輸入你的網址
app.post('/', (req, res) => {
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
//短網址顯示頁
app.get('/success/:id', (req, res) => {
  const host = req.get('host')
  const path = req.params.id
  const newUrl = `${host}/${path}`
  res.render('success',{newUrl})
})
//新網址跳轉
app.get('/:id', (req, res) => {
    const id = req.params.id
    URL.find({id: id})
      .lean()
      .then((url) => {
        const id = url[0]._id.toString()
        return URL.findById(id)
        .lean()
        .then((url) => res.redirect(url.yourUrl))
        .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
})

app.listen(PORT,() =>{
  console.log(`App is running on port http://localhost:${PORT}`)
})