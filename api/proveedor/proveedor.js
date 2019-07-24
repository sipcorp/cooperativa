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

    app.get("/get-productorFilter", function (req, res) {

    })
};
