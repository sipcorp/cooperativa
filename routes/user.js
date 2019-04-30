const express = require('express');
const app = express();
const User = require('../models/user');

app.post("/login", function (req, res, next) {
    let nombre = req.body.userCode;
    let pass = req.body.password;
    var message = '';
    User.findOne({
        userCode: nombre,
        password: pass
    }, function (err, doc) {
        if (err) throw err;
        if (doc) {
            message = 'home'
            res.redirect('/home')
        } else {
            message = 'Wrong Credentials.';
            res.render('index.ejs', {
                message: message
            });
        }
    });
});

// Insert New Users 
app.post("/addUser", function (req, res) {
    let body = req.body;
    let users = new User({
        userCode: body.userCode,
        fullName: body.fullName,
        email: body.email,
        password: body.password,
        date: body.date,
        role: body.role,
        lastLogin: body.lastLogin
    });
    users.save((err, usersDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            user: usersDB
        });
    });
});

module.exports = app;