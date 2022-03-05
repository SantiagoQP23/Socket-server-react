require('dotenv').config();

const Server = require("./models/server");

const server = new Server();

server.listen();

/* // Servidor de express
const express = require('express');
const app = express();

// Servidor de sockets
const server = require('http').createServer(app);

// Configuración de socket server
const io = require('socket.io')(server);



io.on('connection', (socket) => {
  console.log(socket.id);

 */

  /* socket.emit('mensaje-bienvenida', {
    msg: 'Bienvenido al servidor',
    fecha: new Date()
  }); */

 /*  socket.on('mensaje-cliente', (data) => {
    console.log(data);
  }); */

/*   socket.on('mensaje-al-server', (data) => {
    console.log(data)

    io.emit('mensaje-from-server', data);
  })



});

 */