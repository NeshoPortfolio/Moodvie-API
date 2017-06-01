import dbg from 'debug';
import config from './../../config';
import mongoose from 'mongoose';
import bluebird from 'bluebird';

const DEBUG = dbg('dbg:mongodb');

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


export default mongoose;
