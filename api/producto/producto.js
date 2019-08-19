const Producto = require('../../models/producto');
module.exports = (app) => {
    /*############################################### */
    //                 ADD PRODUCTOR
    /*############################################### */

    app.post("/add-producto", function (req, res) {
        let body = req.body;
        let producto = new Producto({
            name: body.name,
            code: body.code,
            price: body.price,
            stock: body.stock,
            description: body.description,
            alert: body.alert
        });

        producto.save((err, prod) => {
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

    app.get("/get-producto", function (req, res) {
        Producto.find({}).exec((err, producto) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                producto
            });
        });
    });
};
