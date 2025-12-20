const areEqual =
  <T>(x: T) =>
  (y: T) =>
    x === y;

console.log(areEqual(1)(1));
console.log(areEqual(1)(2));

type Person = {
  first: string;
  last: string;
};

const alex: Person = {
  first: 'Alex',
  last: 'Adams',
};

class Adams {
  readonly last = 'Adams';
  constructor(readonly first: string) {}
}
const bob: Person = new Adams('Bob');

const { first, last }: Person = alex;
