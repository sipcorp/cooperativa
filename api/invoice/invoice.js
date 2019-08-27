const Invoice = require('../../models/invoice');
module.exports = (app) => {

    /*############################################### */
    //                  ADD INVOICE
    /*############################################### */

    app.post("/add-invoice", function (req, res) {
        let body = req.body;
        console.log(body[0].items)
        let invoice = new Invoice({
            name: body[0].name,
            address: body[0].address,
            phone: body[0].phone,
            invoiceNum: body[0].invoiceNum,
            date: body[0].date,
            items: body[0].items,
            status:"P",
            total:body[0].total
        });
        invoice.save((err, doc) => {
            if (err) {
                return res.json({
                    ok: false,
                    message: err
                });
            }
            res.json({
                ok: true,
                message: false,
                save: doc
            });
        });
    })


    /*############################################### */
    //                  GET ROLE 
    /*############################################### */

    app.get("/get-invoice", function (req, res) {
        //muestra los modulos segun el role
        Invoice.find({status:"P"}
        ).exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                data:data
            });
        });
    });

    app.post("/getInvoiceById",function(req,res) {
        var body = req.body
        var id = body.id
        console.log(body)
        Invoice.find({invoiceNum:id}
        ).exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                data:data
            });
        });
    });
}
