const Database = require("./database");
const UserService = require("./UserService");

const db = new Database();
const userService = new UserService(db);
userService.getUser(1).then((user) => {
  console.log("User:", user);
});
