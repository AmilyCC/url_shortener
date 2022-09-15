const express = require('express');
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;

const routes = require('./routes')

require('./config/mongoose')
app.use('/static', express.static('public'));
app.engine('hbs',exphbs({defaultLayout:'main', extname:'.hbs'}))
app.set('view engine','hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(routes)


app.listen(PORT,() =>{
  console.log(`App is running on port http://localhost:${PORT}`)
})