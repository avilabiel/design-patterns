type Payment = {
  clientId: string;
  amount: number;
};

interface PaymentMethod {
  charge(): Payment;
}

class CreditCardPayment implements PaymentMethod {
  payment: Payment;

  constructor(payment: Payment) {
    this.payment = payment;
  }

  charge(): Payment {
    // ... code to charge with credit card
    console.log('Charging with credit card');
    return this.payment;
  }
}

class DebitCardPayment implements PaymentMethod {
  payment: Payment;

  constructor(payment: Payment) {
    this.payment = payment;
  }

  charge(): Payment {
    // ... code to charge with debit card
    console.log('Charging with debit card');
    return this.payment;
  }
}

class PaymentStrategy {
  strategy: PaymentMethod;

  constructor(strategy: PaymentMethod) {
    this.strategy = strategy;
  }

  charge(): Payment {
    return this.strategy.charge();
  }
}

const creditCardPayment = new CreditCardPayment({
  clientId: '1',
  amount: 10,
});

const paymentStrategy = new PaymentStrategy(creditCardPayment);

paymentStrategy.charge(); // LOG: Charging with credit card

// const debitCardPayment = new DebitCardPayment({
//   clientId: '1',
//   amount: 10,
// });

// const paymentStrategy = new PaymentStrategy(debitCardPayment);

// paymentStrategy.charge(); // LOG: Charging with debit card
