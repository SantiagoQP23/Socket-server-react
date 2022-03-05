

class Sockets {

  constructor(io) {
    this.io = io;

    this.socketsEvents();

  }

  socketsEvents() {

    this.io.on('connection', (socket) => {
      console.log(socket.id);

      socket.on('mensaje-al-server', (data) => {
        console.log(data)

        this.io.emit('mensaje-from-server', data);
      });

    });



  }
}
/* 
   socket.emit('mensaje-bienvenida', {
    msg: 'Bienvenido al servidor',
    fecha: new Date()
  }); */

/*  socket.on('mensaje-cliente', (data) => {
   console.log(data);
 }); */



module.exports = Sockets;