const express = require('express');
const next = require('next');

const routes = require('./routes');

require('dotenv').config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
// const API_URL = process.env.API_URL; // eslint-disable-line
const app = next({ dev });
const handle = routes.getRequestHandler(app);

let server;

app
  .prepare()
  .then(() => {
    server = express();

    // Set up the proxy.
    // if (dev) {
    //   const proxyMiddleware = require('http-proxy-middleware');

    //   server.use(proxyMiddleware('/api', {
    //     target: API_URL,
    //     changeOrigin: true
    //   }));
    // }

    server.use(express.static('static'));

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) {
        throw err;
      }

      console.log(`> Ready on port ${ port } [${ process.env.NODE_ENV }]`);
    });
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
