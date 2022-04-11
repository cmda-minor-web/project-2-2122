require("dotenv").config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3003;

app.use(express.static('static'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Portfolio titel',
    })
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})