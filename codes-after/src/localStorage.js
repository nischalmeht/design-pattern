var { writeFile, existsSync, readFileSync } = require("fs");

class LocalStorage {
  constructor() {
    if (existsSync("localStorage.json")) {
      console.log("loading items from file...");
      var txt = readFileSync("localStorage.json");
      this.items = JSON.parse(txt);
    } else {
      this.items = {};
    }
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key) {
    return this.items[key];
  }

  setItem(key, value) {
    this.items[key] = value;
    writeFile("localStorage.json", JSON.stringify(this.items), (error) => {
      if (error) {
        console.error(error);
      }
    });
  }
}

module.exports = new LocalStorage();
