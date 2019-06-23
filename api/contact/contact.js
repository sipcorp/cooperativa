const Contact = require('../../models/contact');
module.exports = (app) => {
  /*############################################### */
  //                    ADD CONTACT 
  /*############################################### */
  app.post("/add-contact", function (req, res) {
    let body = req.body;
    let contact = new Contact({
   empresa:body.Company,
   nombre:body.Name,
   email:body.Email,
   telefono:body.Tel,
   movile:body.Movile,
   direccion:body.address,
   pais:body.accountAddressCity,
   provincia:body.provincesName,
   distrito:body.distitoName,
   corregimiento:body.corregimiento,
   departamento:body.departments,
   cargo:body.departmentsJob,
   direccionEmpresa:body.departmentsAddressStreet,
   RUC:body.departmentsAddressCity,
   DV:body.departmentsAddressCity,
    });
    contact.save((err, Contact) => {
      if (err) {
        return res.json({
          ok: false,
          message: err
        });
      }
      res.json({
        ok: true,
        message: false,
        save: Contact
      });
    });
  })
};
