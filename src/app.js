/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
// const express = require('express');
// const routes = require('./routes');

// yarn add sucrase - nova sintaxe para importar/exportar arquivos

import express from 'express';
import routes from './routes';
// eslint-disable-next-line linebreak-style

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

// module.exports = new App().server;
export default new App().server;
