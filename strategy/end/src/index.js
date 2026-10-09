const {
  PayPalStrategy,
  CreditCardStrategy,
  BankTransferStrategy,
} = require("./payment-strategies");
const config = require("./config");
const PaymentProcessor = require("./payment-processor");

const processor = new PaymentProcessor();

const paymentStrategy = "paypal";
const amountToPay = 100;

switch (config.defaultPaymentMethod) {
  case "paypal":
    processor.setStrategy(new PayPalStrategy("test@blabla.com"));
    break;
  case "creditcard":
    processor.setStrategy(new CreditCardStrategy("1234-5678-9012-3456"));
    break;
  case "banktransfer":
    processor.setStrategy(new BankTransferStrategy("123456789012"));
    break;
  default:
    console.log("Invalid payment method.");
    break;
}

processor.processPayment(amountToPay);
