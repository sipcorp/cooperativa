const  express = require('express');
var app = express()
var message = '';
var data=[]
app.get('/', (req, res) => {
  res.render('index',{message: message});
});
app.get('/invoice', (req, res) => {
  data ='invoice'
  res.render("invoice",{message: JSON.stringify(data)})
});
app.get('/home', (req, res) => {
  res.render("home",{message: message});
});
app.get('/proyecto', (req, res) => {
  res.render("proyecto")
});
app.get('/bitacora', (req, res) => {
  res.render("bitacora")
});
app.get('/config', (req, res) => {
  res.render("config")
});
app.get('/contact-manager', (req, res) => {
  res.render("contact-manager")
});
module.exports = app;
