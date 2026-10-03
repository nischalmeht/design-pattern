var localStorage = require("./localStorage");

console.log("Number of items in localStorage: ", localStorage.length);
const theme = localStorage.getItem("theme_mode");

console.log("theme_mode: ", theme);

if (!theme) {
  console.log("Theme mode not selected. Assigning a default mode...");
  localStorage.setItem("theme_mode", "light");
  localStorage.setItem("setting_code", "5");
}
