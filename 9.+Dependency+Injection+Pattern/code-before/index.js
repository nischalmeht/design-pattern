const UserService = require("./UserService");

const userService = new UserService();
userService.getUser(1).then((user) => {
  console.log("User:", user);
});
