const mongoose = require('mongoose');
mongoose.pluralize(null);

const Sensor = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Sensor_ID: Number,
    vehicle_count: Number,
    avg_speed: Number,
    date: Date,
    localization : { type : Array , "default" : [] }
});

module.exports = mongoose.model("test_traffic_collection", Sensor);
