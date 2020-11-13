var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
const Sensor = require ("../models/sensor");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a sensor resource');
});


router.post('/', function (req,res,next) {
    Sensor.find({published: true})
        .limit(20)
        .exec(function(err, items) {
            console.log(items.length);
            // res.send("xd");
            res.json({ items });
            console.log({ items })
        });
});


router.get('/check', function (req,res,next) {
    Sensor.find().sort([['date', -1]]).limit(10).then(result => {
        res.json({ result });
    }).catch((err) => {
        res.status(500).json({
            success: false, msg: `Something wrong. ${err}`});
    });
});


module.exports = router;

