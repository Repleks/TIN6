const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname));
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/result', (req, res) => {
    const { cokolwiek, cokolwiekliczba, email } = req.body;
    res.render('result', { cokolwiek, cokolwiekliczba, email });
});

app.listen(3000, () => {
    console.log('Serwer działa na porcie 3000');
});