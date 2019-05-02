const Role = require('../../models/role');
const express = require('express');
const app = express();

app.post("/add-role", function (req, res, next) {
   var newRole = new Role()
       newRole = req.body.data
   newRole.save(function (err, role) {
    if (err) return console.error(err);
    console.log(role.name + " saved to bookstore collection.");
  });
});

module.exports = app;
