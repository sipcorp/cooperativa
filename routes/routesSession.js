module.exports = (app, passport, LocalStrategy) => {

  app.post("/login", passport.authenticate("local-signin", {
    successRedirect: "/home",
    failureRedirect: "/",
    failureFlash: true
  }));

  app.get("/home", (req, res) => {
    res.render("index", {
      titulo: "Inicio de sesion "
    });
  });

  app.post("/Signup", passport.authenticate("local-signup", {
    successRedirect: "/home",
    failureRedirect: "/Signup",
    failureFlash: true
  }));
  app.get("/Signup", (req, res) => {
    res.render("Login", {
      titulo: "signup",
      message: req.flash("Signupmessage ")
    });
  });

  app.get('/', isAuthenticated, (req, res, next) => {
    res.render('home.ejs', {
      titulo: "home"
    });

  });

  app.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
  });

  function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/')
  }
};