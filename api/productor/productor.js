const Productor = require('../../models/productores');
module.exports = (app) => {
 /*############################################### */
  //                  GET PRODUCTOR
  /*############################################### */

  app.post("/add-productor", function (req, res) {
    let body = req.body;
    let productor = new Productor({
      prefix: body.prefix,
      name: body.name,
      project: body.project,
      documentID:body.documentID,
      gender:body.gender,
      birthdate:body.birthdate,
      age:body.age,
      address:body.address
    });

    productor.save((err, prod) => {
      if (err) {
        console.log(err)
        return res.json({
          ok: false,
          message: err
        });
      }
      res.json({
        ok: true,
        message: false,
        save: prod
      });
    });
  })
  
};
