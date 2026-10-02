var Customer = require("./Customer");

var codelicks = new Customer("Codelicks");
codelicks.addItemToList("product 1");
codelicks.addItemToList("product 2");
codelicks.addItemToList("product 3");
codelicks.addItemToList("product 4");
codelicks.addItemToList("product 5");

var john = new Customer("John Something");
john.addItemToList("product 1");
john.addItemToList("product 2");
john.addItemToList("product 3");
john.addItemToList("product 4");
john.addItemToList("product 6");

console.log(`${codelicks.name}: ${codelicks.cartItems}`);
console.log(`${john.name}: ${john.cartItems}`);
