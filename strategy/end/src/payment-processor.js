class PaymentProcessor {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  processPayment(amount) {
    if (!this.strategy) {
      throw new Error("No payment strategy set!");
    }
    this.strategy.pay(amount);
  }
}

module.exports = PaymentProcessor;
