module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('A user connected');

        socket.on('message', (msg) => {
            io.emit('message', msg); // Envía el mensaje a todos los clientes conectados
        });

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
};