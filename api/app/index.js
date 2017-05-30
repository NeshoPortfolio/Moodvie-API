const path             = require('path');
const express          = require('express');
const cors             = require('cors');
const cookieParser     = require('cookie-parser');
const bodyParser       = require('body-parser');
const expressSession   = require('express-session');
const mongoStore       = require('connect-mongo')(expressSession);
const http             = require('http');
const morgan           = require('morgan');

const CONFIG           = require(path.join(__dirname,'../config'));
const DB               = require(path.join(__dirname,'../config/db'));

const app = express();

// so we extract request body and cookies properties
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// so we can do cross-origin resource sharing
app.use(cors());

// so we can parse cookie header and populate req.cookies with an object keyed by the cookie names
app.use(cookieParser());

// http logging concise output colored by response status; dev only
app.use(morgan('dev'));

// setup session handling options
var session = expressSession({
    secret            : CONFIG.sessionStore.secret,
    store             : new mongoStore({mongooseConnection:DB.connection}),
    resave            : false,
    saveUninitialized : false
});
app.use(session);

// set routes for API - TODO
// var routes = require(path.join(__dirname, 'routes'));
// app.use('/api', routes);

var server = http.createServer(app);


module.exports = {
  app: server, //we only need to pass server to initiate listening
  config: CONFIG
};
