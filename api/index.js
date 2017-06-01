// loads environment variables from an .env file
import {} from 'dotenv/config';

import { server } from './app';
import { config } from './app';


server.listen(config.site.port, config.site.host, function (err) {
    if (err) {
        throw err
    }

    console.log(`SERVER LISTENING ON: ${config.site.protocol}://${config.site.host}:${config.site.port}...`);
});
