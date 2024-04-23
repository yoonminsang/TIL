# 설계와 고민들

## 테트리스 페이지 나누기

- 테트리스를 다음과 같은 6개의 페이지로 나눈다. `type Page = 'start' | 'stage-intro' | 'play' | 'stage-clear' | 'dead' | 'ranking';`
- 일단 api를 연동하지 않기 때문에 새로고침해도 테트리스 게임 상태를 유지할 수 없다. 그렇기 때문에 일단은 react-router같은 라이브러리로 관리하지 않고 funnel 형태로 관리한다.
- 페이지 상태에 따라 페이지 컴포넌트를 렌더링하고, 페이지 상태를 변경하는 로직을 props로 넘겨주면 각각의 페이지 컴포넌트는 Page type에 대한 의존성이 제거된다.
- 과연 그럴까? 만약 funnel page 상태가 아니라 실제 페이지로 관리한다고 가정해보자. 그러면 결국 페이지에서 `push('/start')`같은 로직을 써야한다.
- 한번 더 생각해보면 하나의 페이지에서 상태 관리를 하는것과 페이지로 분리하는 것은 애초에 목적이 다르다. 페이지를 나눈다는 것은 새로고침했을 때 이전과 같은 UI를 보여준다는 것을 의미한다.
- 그렇기 때문에 page type에 대한 의존성주입을 적용한다.

## 게임외의 나머지 부분 생각하기

- 복잡한 게임은 가장 마지막에 고려한다.
- 게임로직외에 필요한 상태가 무엇인지 고려해보기
- 테트리스는 n번 stage를 clear하면 n+1번째 stage로 넘어가야한다. 즉 stage는 전역 상태로 관리해야한다.
- stage를 상태로 정의하고 play 페이지에서 clear한 경우와 dead한 경우를 테스트하기 위해서 임시로 버튼을 넣어서 테스트하자.
- 이로서 게임을 제외한 모든 부분은 작업을 완료할 수 있다.

## 게임 사전 작업

- UI와 이벤트는 처음부터 고려할필요가 없다. 처음에는 테트리스 게임을 관찰하고 필요한 데이터가 무엇인지 뽑아내는 작업이 필요하다. db 설계와 동일하게 생각하자.
- 게임과 관련없는 유틸 함수, 게임과 관련있는 코드, 상수, 타입등을 별도로 분리해서 생각하자.
- table과 block을 집중적으로 생각하자.
- 다음 블록은 항상 random으로 생성된다. random한 block을 얻는 함수를 만들어서 사용하자. 테스트코드에 의존성 주입을 하기 위해서 random한 값을 넘길 수 있는 인자를 넣자.
- table과 block을 하나의 UI로 결합해서 보여줘야한다. 또한 유저가 컨트롤하는 현재 position에 따라 block위치를 조절해야한다.
  - 한 단계 더 나누면 block과 position을 결합하는 코드가 필요하다.
  - 이건 코어한 게임로직이고 사용하는 쪽에서는 한단계 더 있는지 여부가 중요하지 않다. 노출할필요가 없는 코드는 노출하지 말자. R&R에 따라 자신의 역할을 명확히 하고 서로 전달하고 전달받는 부분만 신경쓰자.(단일책임원칙, 인터페이스 분리 원칙)
- block을 rotate하는 로직이 필요하다. 이건 결국 행렬의 90도 변환이다. 2x3행렬이 3x2행렬로 변할 수 있음도 고려하자.
  - 이런 독립적이고 복잡한 케이스는 TDD로 구현하면 좋다.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
