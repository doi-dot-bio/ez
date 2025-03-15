#!/usr/bin/env node

const http = require('http');
const url = require('url');

// Get message from command line arguments
const message = process.argv.slice(2).join(' ');

if (!message) {
    console.error('Error: Please provide a message to send');
    console.error('Usage: node cli-send.js "Your message here"');
    process.exit(1);
}

// Encode the message to be URL-safe
const encodedMessage = encodeURIComponent(message);

// Options for the HTTP request
const options = {
    hostname: 'localhost',
    port: 5000,
    path: `/send-message?message=${encodedMessage}`,
    method: 'GET'
};

const req = http.request(options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    res.on('end', () => {
        try {
            const response = JSON.parse(data);
            if (response.success) {
                console.log('Message sent successfully');
            } else {
                console.error(`Error: ${response.message || 'Unknown error'}`);
            }
        } catch (e) {
            console.error('Error parsing response:', e.message);
        }
    });
});

req.on('error', (error) => {
    console.error(`Error sending message: ${error.message}`);
    console.error('Make sure the server is running with: npm run server');
});

req.end();
