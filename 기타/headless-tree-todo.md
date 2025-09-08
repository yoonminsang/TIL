이런 식으로 추가적인 예제 작성하기

made by claude

- 공용 트리 UI를 만들고 그걸 기반으로 해서 다양한 예시를 만들어줘.
- 트리 Block은 9개가 있어. 첫번째 자식인 경우, 마지막 자식인 경우, 등등 이런식으로
- 특별한 경우가 아니라면 3depth, 같은 depth에서는 5개의 데이터를 넣어서 만들어줘.
- 스타일링은 라이브러리없이 react 내장 스타일링을 사용해.
- BasicTree: 가장 기본적인 트리. 열고 닫히는걸 테스트하면돼.
- DnDTree: dnd를 통해 트리 순서를 바꿀 수 있는 트리. dnd-kit를 사용해서 구현해줘.
- VirtualizeTree: 5만개의 데이터를 넣어서 테스트해. 10depth로 적절하게 5만명의 데이터를 넣어줘. tanstack virtualize를 사용해.
- api를 통해 children에 데이터를 놓고 로딩을 넣는 케이스를 테스트해. 실제 api는 아니고 delay같은 함수를 만들어서 사용하자. Tree 옵션에 sync~~를 사용하고 너가 직접 데이터를 추가해주면돼.
- Tree 컴포넌트를 사용하지말고 useTree와 flattenTree를 사용해서 직접 Tree를 만드는 예시도 보여줘.
