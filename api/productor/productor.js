const Productor = require('../../models/productores');
module.exports = (app) => {
 /*############################################### */
  //                 ADD PRODUCTOR
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
  
   /*############################################### */
  //                 GET PRODUCTOR
  /*############################################### */

  app.get("/get-productorFilter", function (req, res) {
  //   let body = req.body
  //   let query = { };
  //   let field = body.type
  //   let val = body.val
  //   if(field == "v1"){
  //     query = {"project.name": val}
  //   }
  //   if(field == "v2"){
  //     query = {prefix: val}
  //   }
  //   if(field == "v3"){
  //     query = {documentID: val}
  //   }
  //   console.log(query)
  //   console.log(field)
  //   console.log(val)
    console.log(req.body)
  //   //muestra los modulos segun el role
  //   Productor.find(query).exec((err, productor) => {
  //     if (err) {
  //       return res.status(400).json({
  //         ok: false,
  //         err
  //       });
  //     }
  //     res.json({
  //       ok: true,
  //       productor
  //     });
  //   });
   })
};
