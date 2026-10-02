// index.js

// Create a new Config instance
const appConfig = new Config((config) => {
  // Set configuration options during initialization
  config.set("port", 3000);
  config.set("env", "development");
  config.setMultiple({
    database: "myappdb",
    debug: true,
  });
});

// Access configuration settings
console.log("App Port:", appConfig.get("port")); // Output: App Port: 3000
console.log("All Settings:", appConfig.getAll());
/*
Output:
All Settings: {
  port: 3000,
  env: 'development',
  database: 'myappdb',
  debug: true
}
*/

// Attempting to modify the configuration after initialization
appConfig.getAll().port = 8000; // This won't change the internal settings

console.log("App Port after modification attempt:", appConfig.get("port")); // Still 3000
