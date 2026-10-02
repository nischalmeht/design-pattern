var PersonBuilder = require("./PersonBuilder");

// Employees
var john = new PersonBuilder("John").makeEmployee().makeManager(50).build();
var bill = new PersonBuilder("Bill").makeEmployee().makeManager(30).build();
var max = new PersonBuilder("Max").makeEmployee().build();

// Customers
var frank = new PersonBuilder("Frank")
  .withFunds(600)
  .withList(["shorts", "shoes"])
  .build();

var ali = new PersonBuilder("Ali").withFunds(400).withList([]).build();
