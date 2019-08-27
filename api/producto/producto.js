const Producto = require('../../models/producto');
module.exports = (app) => {

    // AGREGAR PRODUCTO
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
    });

    // TRAER LISTA DE PRODUCTO
    app.get("/get-producto", function (req, res) {
        Producto.find({}).sort( { name: 1 } ).exec((err, producto) => {
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

    // ACTUALIZAR STOCK
    app.post("/update-producto", function (req, res) {
        var body = req.body;
        var name = body.name;
        var stock = body.stock;
        Producto.findOneAndUpdate(
            { name: name },
            {
                $set: {
                    stock: stock
                }
            },
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
        )
    });
};
