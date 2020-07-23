const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateAngryWord = require('./generate_angryword')
const handlebars = require('./handlebarsHelper')

const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayouts: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body.job
  const angryWord = generateAngryWord(options)
  res.render('index', { angryWord: angryWord, options: options })
})

app.listen(port, () => {
  console.log(`The express is listening on localhost:${port}`)
})







