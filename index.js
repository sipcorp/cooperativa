const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const session = require('express-session');
const flash = require('flash');
const bodyParser = require("body-parser");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const user = require('./routes/user')
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
// const roleApi = require('./api/role/add')(app)
require('./config/port');
// mongoose.set('useCreateIndex', true)
/*
###################### Configuration of  Middleware #####################
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  app.locals.signinMessage = req.flash('signinMessage');
  app.locals.signupMessage = req.flash('signupMessage');
  app.locals.user = req.user;
  // console.log(app.locals)
  next();
});
/*
###################### Configuration  of views and routes  #####################
*/
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(routes);
app.use(user);
// app.use(modules);
require('./api/role/add')(app)
app.use(express.static(path.join(__dirname, 'public')));
require('./routes/routesSession')(app, passport, LocalStrategy)
require('./session/userSession')(passport)
require('./config/database')(mongoose)
require('./routes/module')(app)
// require('./service/serviceGetUsers')(app)


// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*'),
//     res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept'),
//     res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PATCH.DELETE,OPTIONS')
//   next()
// })
/*
###################### Configuration of Port  #####################
*/
app.set('port', process.env.PORT || 5055);

/*
###################### Message of server  #####################
*/
app.listen(port, () => {
  console.log(`SERVER LISTEN PORT ${port}`);
});


