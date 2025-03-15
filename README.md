# EZ App

A simple Electron app with a messaging system that allows you to send messages from the command line and display them in the app. Features a dark mode interface with theme toggle.

## Setup

Install dependencies:

```bash
npm install
```

## Running the App

1. First, start the server:

```bash
npm run server
```

2. Then, in a separate terminal, start the Electron app:

```bash
npm start
```

## Sending Messages

You can send messages to the app from the command line:

```bash
# Using the npm script
npm run message "Your message here"

# Or using the CLI script directly
node cli-send.js "Your message here"
```

Messages will immediately appear in the Electron app window.

## Features

- Dark mode UI with toggle switch
- Real-time message display with Socket.IO
- Simple CLI for sending messages
- Theme preference is saved between sessions
- Native Electron dark mode integration

## Development

- `main.js` - Electron main process
- `renderer.js` - Renderer process code
- `server.js` - Express server with Socket.IO (port 5000)
- `cli-send.js` - Command-line tool for sending messages
- `public/index.html` - The web page displayed in the app with theme toggle
