
var shortid = require('shortid');
var db = require('../db');


module.exports.postAdd = function(req, res, next){
    if (req.body.name.length>30){
        var err = "Không được nhập quá 30 ký tự"
        res.render('users/add',{
            err: err
        })
    }
    next();
};