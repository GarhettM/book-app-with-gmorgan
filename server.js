'use strict'


//Packages
const express = require('express');


//Global Variables / App Setup
const app = express();
const PORT = process.env.PORT || 3000;


//Middleware -public files are front end facing
app.use(express.static('./public/styles'));
app.use(express.urlencoded({extended: true}));


//CONFIGS
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  console.log(req.body);
  res.redirect('/pages/searches/new.ejs');
});

app.post('/searches/new', (req, res) => res.render('/pages/searches/new.ejs'));

app.get('/searches/show', (req, res) => {
  const url = 'https://www.googleapis.com/books/v1/volumes'

  const superQuery 

})


app.listen(PORT, console.log(`we runnin cool runnins @ ${PORT}`));