var personFactory = require("./personFactory");

var codelicks = personFactory("Codelicks", 500);
var john = personFactory("John", 900, "employee", "Something");

john.payDay(300);

console.log(codelicks.toString());
console.log(john.toString());
