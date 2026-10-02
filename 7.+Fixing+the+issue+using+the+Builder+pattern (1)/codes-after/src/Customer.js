class Customer {
  constructor(builder) {
    this.name = builder.name;
    this.isEmployee = builder.isEmployee;
    this.isManager = builder.isManager;
    this.hours = builder.hours || 0;
    this.funds = builder.funds || 0;
    this.shoppingList = builder.shoppingList || [];
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Customer;
