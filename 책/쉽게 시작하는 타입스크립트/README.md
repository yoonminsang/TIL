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

## 16장 타입 모듈

- 모듈화 전략: Barrel
  - index에서 여러 파일 export하는 방식

## 17장 유틸리티 타입

- Pick: 타입에서 필요한 타입만 가져오기
- Omit: 타입에서 불필요한 타입 제거해서 가져오기
- Partial: 전무 옵셔널
- Exclude: 유니언 타입을 구성하는 특정 타입을 제외할 때 사용.(위에는 객체 타입인데 이거는 유니언 타입)
- Record: 타입 1개를 속성의 key로 받고 다른 타입 1개를 속성 value로 받아 객체 타입으로 변환
- 기타등등... [링크](https://www.typescriptlang.org/ko/docs/handbook/utility-types.html)

## 18장 맵드 타입

- 맵드 타입: 이미 정의된 타입을 가지고 새로운 타입을 생성할 때 사용하는 타입 문법
  - 유틸리티 타입은 모두 내부적으로 맵드 타입을 이용해서 구현
- 매핑 수정자: 맵드 타입으로 타입을 변환할 때 속성 성질을 변환할 수 있도록 도와주는 문법. ex) +, -, readonly 등
  - `-?:` 타입은 처음봤다..

## 19장 실전프로젝트 환경 구성

- \*: 디렉터리 구분자를 제외한 모든 파일 이름
- \*_/_: 해당 폴더의 모든 하위 폴더
- remoeComments: 주석제거

- [추천 설정 링크](https://github.com/tsconfig/bases)

## 후기

- 18장 맵드 수정자(443p) 일부 말고는 모르는게 하나도 안나왔다..
- 타입스크립트를 빡세게 공부해볼려고 샀는데 생각보다는 너무 기본만 들어있었다.
- 그동안 실무 경험이 헛되지 않았다는걸 의미한다고 긍정적으로 생각하고 다른 방법으로 추가적인 학습을 해야겠다.
