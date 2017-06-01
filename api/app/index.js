import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressSession from 'express-session';
import connectMongo from 'connect-mongo';
import http from 'http';
import morgan from 'morgan';

import config from './../config';
import db from './../config/db';

const mongoStore = connectMongo(expressSession);
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
    secret            : config.sessionStore.secret,
    store             : new mongoStore({mongooseConnection:db.connection}),
    resave            : false,
    saveUninitialized : false
});
app.use(session);

// set routes for API - TODO
// var routes = require(path.join(__dirname, 'routes'));
// app.use('/api', routes);

const server = http.createServer(app);


//we only need to pass server to initiate listening
export { server, config };
