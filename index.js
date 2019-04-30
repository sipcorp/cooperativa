const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const user = require('./routes/user')
const mongoose = require('mongoose');
const modules = require('./routes/module')
const session = require('express-session');
const bodyParser = require("body-parser");
const {
  url
} = require('./config/database');
require('./config/port');
/*
###################### Configuration databse  #####################
*/
mongoose.connect(url, {
  useNewUrlParser: true
}, (err) => {
  if (err) throw err;
  console.log(' ONLINE database')
})
mongoose.set('useCreateIndex', true);

/*
###################### Configuration of  Middleware #####################
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
/*
###################### Configuration  of views and routes  #####################
*/
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(routes);
app.use(user);
app.use(modules);
app.use(express.static(path.join(__dirname, 'public')));
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


