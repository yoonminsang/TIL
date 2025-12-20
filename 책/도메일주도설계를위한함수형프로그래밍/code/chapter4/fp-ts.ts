// import { Either } from 'fp-ts/lib/Either';
// import { Option } from 'fp-ts/Option';
/**
 * @category model
 * @since 2.0.0
 */
export interface Left<E> {
  readonly _tag: 'Left';
  readonly left: E;
}
/**
 * @category model
 * @since 2.0.0
 */
export interface Right<A> {
  readonly _tag: 'Right';
  readonly right: A;
}
/**
 * @category model
 * @since 2.0.0
 */
export type Either<E, A> = Left<E> | Right<A>;

/**
 * @category model
 * @since 2.0.0
 */
export interface None {
  readonly _tag: 'None';
}
/**
 * @category model
 * @since 2.0.0
 */
export interface Some<A> {
  readonly _tag: 'Some';
  readonly value: A;
}
/**
 * @category model
 * @since 2.0.0
 */
export type Option<A> = None | Some<A>;
/**
 * `None` doesn't have a constructor, instead you can use it directly as a value. Represents a missing value.
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const none: Option<never>;

class PersonalName {
  readonly firstName: string;
  readonly middleInitial: Option<string>;
  readonly lastName: string;
  // 책에 없음.
  constructor(firstName: string, middleInitial: Option<string>, lastName: string) {
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
  }
}

const name = new PersonalName('John', none, 'Doe');

type PayInvoice = (i: UnpaidInvoice, j: Payment) => Either<PaymentValidationErrors, PaidInvoice>;

type PaymentError = CardTypeNotRecognized | PaymentRejected | PaymentProviderOffline;
