복잡한 컴포넌트인 경우 composition pattern으로 여러 컴포넌트를 노출해야하는 경우가 있다. 이때 context api를 사용하면 컴포넌트에 props를 내리지 않고도 의존성을 주입할 수 있다.
그런데 해당 데이터를 보여주지 않는다던가, 커스텀해야하는 경우가 있다. 이럴때는 props를 추가하고 다음과 같이 제어할 수 있다.

- undefined: context api
- null: 렌더링하지 않음
- props 존재: 해당 값으로 커스텀
