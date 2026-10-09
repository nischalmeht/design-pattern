class PayPalStrategy {
  constructor(email) {
    this.email = email;
  }

  pay(amount) {
    console.log(`Paying $${amount} using PayPal (Account: ${this.email}).`);
  }
}

class CreditCardStrategy {
  constructor(cardNumber) {
    this.cardNumber = cardNumber;
  }

  pay(amount) {
    console.log(
      `Paying $${amount} using Credit Card (Card: ${this.cardNumber}).`
    );
  }
}

class BankTransferStrategy {
  constructor(accountNumber) {
    this.accountNumber = accountNumber;
  }

  pay(amount) {
    console.log(
      `Paying $${amount} using Bank Transfer (Account: ${this.accountNumber}).`
    );
  }
}

module.exports = { PayPalStrategy, CreditCardStrategy, BankTransferStrategy };
