const Cliente = require('../../models/cliente');
module.exports = (app) => {

  /*############################################### */
  //                    ADD CAJA
  /*############################################### */

  app.post("/add-cliente", function (req, res) {
    let body = req.body;
    let cliente = new Cliente({
      name: body.name,
      documentID: body.documentID,
      direccion: body.direccion,
      movile: body.movile,
      phone: body.phone,
      observacion: body.observacion
    });
    cliente.save((err, cliente) => {
      if (err) {
        return res.json({
          ok: false,
          message: err
        });
      }
      res.json({
        ok: true,
        message: false,
        save: cliente
      });
    });
  });

  app.get("/get-cliente", function (req, res) {
    Cliente.find({}).sort( { name: 1 } ).exec((err, cliente) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }
      res.json({
        ok: true,
        cliente
      });
    })

  });


}



