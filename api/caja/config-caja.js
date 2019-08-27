const Caja = require('../../models/caja');
module.exports = (app) => {

  /*############################################### */
  //                  GET CAJA 
  /*############################################### */

  app.get("/get-caja", function (req, res) {
    let date = new Date();
    let start = date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + date.getDate() + "T05:00:00.000+00:00"
    let query = { startDate: { $gte: start } };
    Caja.find(query).exec((err, caja) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }
      res.json({
        ok: true,
        caja
      });
    });
  });

  /*############################################### */
  //                    ADD CAJA
  /*############################################### */

  app.post("/add-caja", function (req, res) {
    let body = req.body;
    let role = new Caja({
      amountStart: body.startAmount,
      startDate: body.startDate,
      endDate: '',
      userCode: body.cajero,
      faltante: '',
      sobrante: '',
      cashCount: []
    });
    role.save((err, Role) => {
      if (err) {
        return res.json({
          ok: false,
          message: err
        });
      }
      res.json({
        ok: true,
        message: false,
        save: Role
      });
    });
  });

  /*############################################### */
  //                    UPDATE CAJA CAJA
  /*############################################### */

  app.post("/update-caja", function (req, res) {
    let body = req.body;
    let id = body.id;
    let objB = body.objB;
    let objCo = body.objCo;
    let objC = body.objC;
    let endDate = body.endDate
    //console.log(body)
    //console.log(id)
    // Caja.update({ _id: id }, {
    //   $addToSet: {
    //     cashCount: {
    //       $each: objB, objCo, objC
    //     }
    //   }
    // }, { multi: true })

    Caja.findOneAndUpdate({ _id: id },
      { $set: { endDate: endDate, cashCount: { objB, objCo, objC } } },
      function (err, doc) {
        if (err) {
          return res.json({
            ok: false,
            message: err
          });
        }
        res.json({
          ok: true,
          message: false,
          update: doc
        });
      }
    );
  });

}



