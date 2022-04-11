const hostname = '127.0.0.1';
const express = require('express')
const app = express()
const port = 2000

require('dotenv').config({
    path: '.env-dev'
})


const {
    API_KEY
} = process.env

app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Tell express to use a 'static' folder
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("home")
})


app.listen(port, () => {
    console.log(`Ai we live at http://${hostname}:${port}/`);
})