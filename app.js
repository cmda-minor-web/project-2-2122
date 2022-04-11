const express = require('express')
const app = express()
const port = process.env.PORT || 3000

require('dotenv').config({path: '.env-dev'})

const {
  API_KEY
} = process.env

app.set('view engine', 'ejs')

app.set('views', 'views')

app.use(express.static('static'))

app.get("/", (req, res) => {
  res.render("index", {
    title: "Het minor web wereldje",
  })
})

// Offline page
app.get('/offline', (req, res) => {
  res.render("offline", {
    title: "You are Offline"
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})