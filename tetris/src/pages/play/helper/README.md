- 마이그레이션에 사용한 스크립트

```
function convert(arr) {
  return arr.map((col) =>
    col.map((v) => {
      return { type: v };
    })
  );
}
```
