const User = require('../../models/user');
module.exports = (app) => {
  /*############################################### */
  //                    ADD USERS 
  /*############################################### */

  app.post("/charts_post", function (req, res) {
    // guardo los nuevos valores   del chart
    let body = req.body;
    let User = new User({
      userCode: body.userCode,
      fullName: body.fullName,
      email: body.email,
      password: body.password,
      date: body.date,
      cargo: body.cargo,
      gender: body.gender,
      role: body.role,
      tel: body.tel,
      movile: body.movile,
      direction: body.direction,
      country: body.country,
      province: body.province,
      corregimiento: body.corregimiento,
      lastLogin: ""
    });
    User.save((err, userdb) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }
      res.json({
        ok: true,
        Users: userdb
      });
    });
  });

};
