const Module = require('../../models/module');
module.exports = (app) => {

  /*############################################### */
  //                  GET ROLE 
  /*############################################### */

  app.get("/get-module", function (req, res) {
    //muestra los modulos segun el role
    Module.find({}
    ).exec((err, role) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }
      res.json({
        ok: true,
        role
      });
    });
  });

}

