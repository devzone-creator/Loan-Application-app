const express = require('express')
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/application-form', (req, res) => {
    res.render('loanform')
});

app.listen(1000, () => {
    console.log('Server is ready . ...')
})