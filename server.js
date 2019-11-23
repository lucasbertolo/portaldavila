/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(compression());

  server.get('/userarea', (req, res) => {
    const actualPage = '/userarea';
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/property-description/:id', (req, res) => {
    const actualPage = '/property-description';
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/team', (req, res) => {
    const actualPage = '/team';
    app.render(req, res, actualPage);
  });

  server.get('/property', (req, res) => {
    const actualPage = '/property';
    app.render(req, res, actualPage);
  });

  server.get('/manager/:id', (req, res) => {
    const actualPage = '/manager';
    app.render(req, res, actualPage);
  });


  server.get('*', (req, res) => handle(req, res));


  server.listen(4000, (err) => {
    if (err) throw err;
    console.log('Ready on http://localhost:4000');
  });
})
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
