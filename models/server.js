

// Servidor de express
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');
const cors = require('cors');


class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;


    // Http Server
    this.server = http.createServer(this.app);


    // Configuraciones de socket

    this.io = socketio(this.server, { /* configuraciones */ });

  }

  middlewares() {
    this.app.use( express.static( path.resolve( __dirname, '../public') ));

    // Cors
    this.app.use( cors() );
  }


  configurarSockets() {
    new Sockets( this.io );
  }


  listen() {

    this.middlewares();

    this.configurarSockets();

    this.server.listen(this.port, () => {
      console.log("Servidor corriendo en puerto: ", this.port);
    });


  }




}

module.exports = Server;