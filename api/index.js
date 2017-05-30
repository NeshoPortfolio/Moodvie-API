// loads environment variables from an .env file
require('dotenv').config();

// initialize app core packages and site config
const app    = require('./app').app;
const config = require('./app').config;


app.listen(config.site.port, config.site.host, function (err) {
    if (err) {
        throw err
    }

    console.log(`SERVER LISTENING ON: ${config.site.protocol}://${config.site.host}:${config.site.port}...`);

});