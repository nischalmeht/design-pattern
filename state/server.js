// server.js

const WebSocket = require("ws");

const PORT = 5000;
const server = new WebSocket.Server({ port: PORT });

let clients = [];

server.on("connection", (socket) => {
  console.log("A client connected.");
  clients.push(socket);

  socket.on("message", (message) => {
    // Broadcast the message to all connected clients
    clients.forEach((client) => {
      if (client !== socket && client.readyState === WebSocket.OPEN) {
        console.log(`sending message ${message}`);
        client.send(message);
      }
    });
  });

  socket.on("close", () => {
    console.log("A client disconnected.");
    clients = clients.filter((client) => client !== socket);
  });
});

console.log(`WebSocket server is listening on ws://localhost:${PORT}`);
