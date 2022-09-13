const express = require('express');
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
require('./config/mongoose')
const app = express();

const PORT = process.env.PORT || 3000;


app.engine('hbs',exphbs({defaultLayout:'main', extname:'.hbs'}))
app.set('view engine','hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use('/static', express.static('public'));

// const Todo = require('../../models/todo') // 載入 Todo model
app.get('/', (req, res) => {
  res.render('index')
})


app.listen(PORT,() =>{
  console.log(`App is running on port http://localhost:${PORT}`)
})