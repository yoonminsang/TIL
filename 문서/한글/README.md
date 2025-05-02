- 한글 입력 시 중복 이벤트 발생 막기
  ```
  const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === 'Enter') {
      e.preventDefault();
      if (e.nativeEvent.isComposing) {
          return;
  }
  ```
  - [링크](https://medium.com/@1004wipi/%ED%95%9C%EA%B8%80-%EC%9E%85%EB%A0%A5-%EC%8B%9C-%EC%A4%91%EB%B3%B5-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B0%9C%EC%83%9D-5dcdbb24526a)
