# MOODVIE API
Built using NodeJS with YARN as package manager and MONGODB for database purposes.
Compiles ES6 code via Babel.

##### Setup guide
1. Create `.env` file in `/api` directory. We're using [dotenv](https://www.npmjs.com/package/dotenv) package to manage environment variables.
1. Copy-paste `env-cheatsheet.txt` to `.env` file in the `/api` root directory.
2. Configure using your own dev setup. You can generate SESSION_STORE_SECRET via [random.org](https://www.random.org/strings/?num=1&len=20&digits=on&upperalpha=on&unique=on&format=html&rnd=new)

##### Running the app
1. `yarn start` - runs the development version of the app
2. `yarn run production` 
        - removes the `dist` directory if it exists and creates an empty `dist` directory
        - compiles app and put the output and source map files in `dist` folder
        - runs the compiled app

