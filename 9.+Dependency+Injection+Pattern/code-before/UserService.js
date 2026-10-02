const Database = require("./database");

class UserService {
  getUser(id) {
    const db = new Database();
    return db.query(`SELECT * FROM users WHERE id = ${id}`);
  }
}

module.exports = UserService;
