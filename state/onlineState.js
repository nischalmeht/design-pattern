const WebSocket = require("ws");

class OnlineState {
  constructor(client) {
    this.client = client;
  }

  enter() {
    this.client.socket = new WebSocket(this.client.url);

    this.client.socket.on("open", () => {
      console.log("Connected to the server.");
      while (this.client.queue.length > 0) {
        const message = this.client.queue.shift();
        this.send(message);
      }
    });

    this.client.socket.on("message", (data) => {
      this.client.handleMessage(data.toString());
    });

    this.client.socket.on("close", () => {
      console.log("Connection closed.");
      this.client.transitionTo("offline");
    });

    this.client.socket.on("error", (error) => {
      console.log("Connection error:", error.message);
      this.client.transitionTo("offline");
    });
  }

  send(message) {
    if (
      this.client.socket &&
      this.client.socket.readyState === WebSocket.OPEN
    ) {
      this.client.socket.send(message, (err) => {
        if (err) {
          console.log("Send error:", err.message);
          this.client.queue.push(message);
          this.client.transitionTo("offline");
        } else {
          console.log(`Sent: ${message}`);
        }
      });
    } else {
      console.log("Socket is not open. Queuing message.");
      this.client.queue.push(message);
      this.client.transitionTo("offline");
    }
  }
}

module.exports = { OnlineState };
