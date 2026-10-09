const WebSocket = require("ws");
const readline = require("readline");
const { OnlineState } = require("./onlineState");
const { OfflineState } = require("./offlineState");

class ChatClient {
  constructor(url) {
    this.url = url;
    this.socket = null;
    this.queue = [];
    this.currentState = null;
    this.states = {
      online: new OnlineState(this),
      offline: new OfflineState(this),
    };

    this.transitionTo("offline");
    this.setupInput();
  }

  transitionTo(stateName) {
    console.log(`Transitioning to ${stateName} state.`);
    this.currentState = this.states[stateName];
    this.currentState.enter();
  }

  send(message) {
    this.currentState.send(message);
  }

  setupInput() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "",
    });

    rl.on("line", (line) => {
      const message = line.trim();
      if (message) {
        this.send(message);
      }
    });
  }

  handleMessage(message) {
    console.log(`\nReceived: ${message}`);
    process.stdout.write(""); // Refresh prompt
  }
}

// Start the client
const client = new ChatClient("ws://localhost:5000");
