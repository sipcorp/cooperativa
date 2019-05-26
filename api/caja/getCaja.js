const Caja = require('../../models/caja');
module.exports = (app) => {

  /*############################################### */
  //                  GET ROLE 
  /*############################################### */

  app.get("/get-caja", function (req, res) {
    //muestra los modulos segun el role
    Caja.find({}
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

