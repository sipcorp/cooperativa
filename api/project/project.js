const Project = require('../../models/project');
module.exports = (app) => {
  /*############################################### */
  //                  ADD CAJA 
  /*############################################### */
  app.post("/add-project", function (req, res) {
    let body = req.body;
    let project = new Project({
      name: body[0].name,
      iniDate: body[0].iniDate,
      endDate: body[0].endDate,
      categoria: body[0].categoria,
      benificiarios: body[0].benificiarios,
      beneficio: body[0].beneficio,
      rubros: body[0].rubros,
      bitacoraModel: body[0].bitacoraModel
    });
    project.save((err, prop) => {
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
        save: prop
      });
    });
  })
  /*############################################### */
  //                  GET PROJECTOS 
  /*############################################### */
  app.get("/get-project", function (req, res) {
    Project.find().exec((err, project) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }
      res.json({
        ok: true,
        project
      });
    });
  })
};
