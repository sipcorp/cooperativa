const Proveedor = require('../../models/proveedor');
module.exports = (app) => {
    /*############################################### */
    //                 ADD PROVEEDOR
    /*############################################### */

    app.post("/add-proveedor", function (req, res) {
        let body = req.body;
        let proveedor = new Proveedor({
            type: body.type,
            prefix: body.prefix,
            name: body.name,
            content: body.content,
            phone: body.phone,
            movile: body.movile,
            address: body.address,
            documentID: body.documentID,
            price: body.price,
            contacPerson: body.contacPerson
        });

        proveedor.save((err, prod) => {
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

    app.post("/get-proveedorFilter", function (req, res) {
        let query = { };
        let body = req.body;
        var project = body.project;
        var memberNum = body.memberNum;
        var documentID = body.documentID;
        //console.log(req.headers)
        if(project != undefined){
            query = {'content.project':project}
        }
        if(memberNum != undefined){
            query = {prefix:memberNum}
        }
        if(documentID != undefined){
            query = {documentID:documentID}
        }
        //console.log(project)
        //console.log(memberNum)
        //console.log(documentID)
        //console.log(body)
        Proveedor.find(query).exec((err, data) => {
            if (err) {
              return res.status(400).json({
                ok: false,
                err
              });
            }
            res.json({
              ok: err,
              data
            });
          });
    })
};
