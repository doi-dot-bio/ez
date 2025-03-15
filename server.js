const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Store the latest message
let latestMessage = '';

// Handle socket connections
io.on('connection', (socket) => {
    console.log('New client connected');
    
    // Send the latest message to newly connected clients
    if (latestMessage) {
        socket.emit('message', latestMessage);
    }
    
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// API endpoint to receive messages from CLI
app.get('/send-message', (req, res) => {
    const message = req.query.message || '';
    if (message) {
        latestMessage = message;
        io.emit('message', message);
        io.emit('refresh');
        io.emit('clear-console'); // Add this line to emit a clear console event
        console.log(`Message received: ${message}`);
        res.send({ success: true, message: 'Message sent successfully' });
    } else {
        res.status(400).send({ success: false, message: 'No message provided' });
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
