## 8장 enum

- const enum은 컴파일 결과물의 코드양을 줄일 수 있다.

## 9장 클래스

- private 클래스 접근 제어자를 사용하면 컴파일단계까지는 막을 수 없다.(ts는 컴파일할 때 미리 에러를 발견해주지만 실행시점에는 검증할 수 없음)
- js에서 추가된 #을 사용하면 실행시점에서도 막을 수 있음.

## 10장 제네릭

- `T extends {length:number}` 이런 방법도 있음(string, array, object)

## 14장 타입가드

- 타입 가드 문법: typeof, instanceof, in
- 타입 가드 함수

```
function isPerson(someone: Person | Developer): someone is Person {
  return (someone as Person).age !== undefined;
}
```

- 구별된 유니언 타입

```
interface Person {
  name: string;
  age: number;
  industry: 'common';
}

interface Developer {
  name: string;
  age: number;
  industry: 'tech';
}

function greet(someone: Person | Developer) {
  if (someone.industry === 'common') {
    // Person
  }
}
```

## 15장 타입 호환

- 구조적 타이핑: 타입 유형보다는 타입 구조로 호환 여부를 판별하는 언어적 특성
- 함수 타입의 호환: 기존 함수 코드의 동작을 보장해 줄 수 있는가 관점에서 이해하자.
  함수의 파라미터가 2개인 함수를 파라미터가 1개인 함수에 할당하면 에러가 발생함.
  하지만 함수의 피라미터가 1개인 함수를 피라미터가 2개인 함수에 할당하면 에러가 발생하지 않음

```
var getNumber = function (num) {
  return num;
};

var sum = function (x, y) {
  return x + y;
};
sum = getNumber;
```
