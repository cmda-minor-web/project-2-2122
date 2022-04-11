require('dotenv').config();
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
});

app.use((req, res) => {
    res.status(404).render('error404');
});

app.listen(process.env.PORT, () => {
    console.log(`Application started on port: http://localhost:${process.env.PORT}`);
});
