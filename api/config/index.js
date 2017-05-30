const path = require('path');
const config = {};

config.site = {
    'host': process.env.SITE_HOST,
    'port': process.env.SITE_PORT,
    'protocol'  : process.env.SITE_PROTOCOL,
    'api'       : process.env.APP_API_URL,
    'uploadDIR' : path.join(__dirname,'../uploads'),
    'max_upload_size' : 10485760,
    'allowed_file_types':['jpg','jpeg','png']
};

config.db = {
    'host': process.env.DB_HOST,
    'port': process.env.DB_PORT,
    'name': process.env.DB_NAME
};

config.themoviedb = {
    'key': process.env.THEMOVIEDB_API_KEY
};

config.netflix = {
    'key': process.env.NETFLIX_API_KEY
};

config.youtube = {
    'key': process.env.YOUTUBE_API_KEY
};

config.sessionStore = {
    'secret': process.env.SESSION_STORE_SECRET //just random string... random.org
};


module.exports = config;
