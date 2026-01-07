// declare const unitQuantities: unique symbol;
// class UnitQuantities {
//   [unitQuantities]!: never;
//   constructor(readonly value: number) {}
// }

// type Undefined = never;

// type CustomerInfo = Undefined;
// type ShippingAddress = Undefined;

// class Order {
//   constructor(readonly customerInfo: CustomerInfo, readonly shippingAddress: ShippingAddress) {}
// }

// type CalculatePrices = (i: OrderForm) => (j: ProductCatalog) => PriceOrder;

// class CalculatePricesInput {
//   constructor(readonly order: Order, readonly productCatalog: ProductCatalog) {}
// }
// type CalculatePrices = (i: CalculatePricesInput) => PriceOrder;
// import { TaskEither } from 'fp-ts/TaskEither';
// import { Either } from 'fp-ts/Either';

// /**
//  * @category model
//  * @since 2.0.0
//  */
// export interface Task<A> {
//   (): Promise<A>;
// }

// type ValidateOrder = (i: Order) => TaskEither<OrderValidationError[], ValidatedOrder>;

// const address1 = new Address('123 Main st', 'New Yor', '9001');
// const address2 = new Address('123 Main st', 'New Yor', '9001');
// assert.deepEqual(address1, address2); // true

// type A = number & { a: number };

// const a: A = 1;

// type Top<T> = T extends
