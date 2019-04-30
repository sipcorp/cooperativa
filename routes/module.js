const express = require('express');
const app = express();
const Module = require('../models/module');

app.post("/get-module", function (req, res, next) {
    Module.find({}, function (err, doc) {
        if (err) throw err;
        if (doc) {
           res.json({
               message:true,
               data:doc
           })
        } else {
            res.json({
                message:false,
                data:doc
            })
        }
    });
});

module.exports = app;

