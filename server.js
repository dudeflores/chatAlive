const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('Usuario conectado');

    socket.on('chat message', (message) => {
        console.log('mensaje recibido: ' + message);
        io.emit('chat message', message);
    });
   
    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

http.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});