class Customer {
  constructor(name = "no name") {
    this._name = name;
    this._cartItems = [];
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get cartItems() {
    return this._cartItems.join(", ");
  }

  addItemToList(item) {
    this._cartItems.push(item);
  }
}

module.exports = Customer;
