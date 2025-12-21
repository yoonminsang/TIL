- class에서는 strict mode가 적용되고 일반 함수 호출시 this가 undefined가 된다.(non strict mode에서는 전역객체)

ex

```
// 클래스는 암묵적으로 strict mode
class EventHandler {
  constructor(name) {
    this.name = name;
  }

  regularMethod() {
    console.log(this); // undefined (분리 호출 시)
    console.log(`Regular: ${this.name}`); // 에러!
  }
}

const handler = new EventHandler('핸들러');
const regular = handler.regularMethod;
regular(); // TypeError: Cannot read properties of undefined (reading 'name')
```

---

- class에서 arrow function으로 만들면 아래와 같이 메서드에 this가 binding된다.

```
// 실제로는 이렇게 동작
constructor(name) {
  this.name = name;
  this.arrowMethod = (() => {
    console.log(this.name);
  }).bind(this); // 여기서 this가 영구적으로 바인딩됨
}
```

ex

```
class Test {
  constructor(name) {
    this.name = name;
  }

  arrowMethod = () => {
    console.log(this.name);
  }
}

const test = new Test('테스트');
const detached = test.arrowMethod;

// 어떻게 호출하든 항상 인스턴스를 가리킴
test.arrowMethod();        // '테스트'
detached();               // '테스트'
detached.call(null);      // '테스트' (call/apply/bind로도 변경 불가!)
detached.call({name: '다른객체'}); // '테스트' (여전히 원래 인스턴스)
```

---

- 클래스와 생성사 함수의 다른점 한가지
  - 조금 특이하게 배열을 상속했다. 이를 마커 클래스라고 부른다. 배열만으로는 확인할 수 없기 때문에 상속받아서 새롭게 만든것이다. es5까지는 상속을 통해서 프로토타입을 만들어도 만들어지는 객체는 오브젝트다. 근데 es6에서 클래스를 사용해서 만들면 부모께 만들어진다. 이걸 홈 오브젝트라고 한다. 이 대상은 코어 객체다. 즉 Data는 진짜 배열이 된다. (es5에서는 진짜 배열이 아니였다.)
  - es6 클래스는 대체 불가능하다. this를 바인딩해서 바꾸는 능력이 있다. 부모가 먼저만들어지고 자식을 타면서 this를 바꾼다. 이게 핵심적인 기능이다. es6 이전에는 this를 바꿀 수 없었다. 나는 클래스가 프로토타입, 생성자 함수의 syntax sugar말고도 추가적인 기능이 있다고는 알았지만 자세히 찾아보지 않았다. 이번기회에 조금 알게되었는데 이건 따로 블로그에 글을 정리해서 올려야겠다.

```
const Data = class extends Array {
  constructor(row, col) {
  prop(this, { row, col });
  }
};
```
