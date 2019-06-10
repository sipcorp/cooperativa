const Productor = require('../../models/productores');
module.exports = (app) => {
 /*############################################### */
  //                  GET PRODUCTOR
  /*############################################### */

  app.post("/add-productor", function (req, res) {
    let body = req.body;
   console.log(body)
  })
  
};
