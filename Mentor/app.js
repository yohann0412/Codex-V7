const express = require("express");
const app = express();


app.use(express.static(__dirname + '/assets'));
app.set('view engine', 'ejs') 

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/trainers', (req, res) => {
    res.render('trainers');
})
app.get('/competitions', (req, res) => {
    res.render('competitions');
})
app.get('/timeline', (req, res) => {
    res.render('timeline');
})
app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})
app.listen(5000, () => {
    console.log('Server is running')
})