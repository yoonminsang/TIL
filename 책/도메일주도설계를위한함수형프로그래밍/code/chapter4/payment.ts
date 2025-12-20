declare const checkNumber: unique symbol;
class CheckNumber {
  [checkNumber]!: never;
  constructor(readonly value: number) {}
}

declare const cardNumber: unique symbol;
class CardNumber {
  [cardNumber]!: never;
  constructor(readonly value: string) {}
}

type CardType = 'Visa' | 'MasterCard';
class CreditCardInfo {
  constructor(readonly cardType: CardType, readonly cardNumber: CardNumber) {}
}

// 책에 정의되지 않음.
declare const cash: unique symbol;
class Cash {
  [cash]!: never;
  constructor(readonly value: number) {}
}
type PaymentMethod = Cash | CheckNumber | CreditCardInfo;

declare const paymentAmount: unique symbol;
class PaymentAmount {
  [paymentAmount]!: never;
  constructor(readonly value: number) {}
}
type Currency = 'EUR' | 'USD';

class Payment {
  // ...
  readonly amount: PaymentAmount;
  readonly currency: Currency;
  readonly method: PaymentMethod;
  // ...
}

type UnpaidInvoice = any;
type PaidInvoice = any;

type PayInvoice = (i: UnpaidInvoice, j: Payment) => PaidInvoice;

type ConvertPaymentCurrency = (i: Payment, j: Currency) => Payment;
