const DEBUG  = require('debug')('dbg:mongodb');
const path   = require('path');
const config = require(path.join(__dirname,'../'));

var mongoose = require('mongoose');
var bluebird = require('bluebird');

// make mongoose use bluebird for promises - https://stackoverflow.com/a/40822769
mongoose.Promise = bluebird;
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);

var db = mongoose.connection;

db.on('error', function onError(error){
    DEBUG('DB - NOT CONNECTED: %',error.message);
});
db.once('open', function() {
    DEBUG('DB - CONNECTED');
});

module.exports = mongoose;