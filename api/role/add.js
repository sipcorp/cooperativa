const Role = require('../../models/role');
module.exports = (app) => {
  app.post("/add-role", function (req, res) {
    let body = req.body;
    let role = new Role({
      name: body.name,
      module: body.module
    });
    //console.log(body);
    role.save((err, Role) => {
      if (err) {
        return res.json({
          ok: false,
          message: err
        });
      }
      res.json({
        ok: true,
        save: Role
      });
    });
  })


};
