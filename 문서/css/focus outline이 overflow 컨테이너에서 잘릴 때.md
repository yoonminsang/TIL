focus outline이 overflow 컨테이너에서 잘릴 때
`box-shadow: 0 0 0 2px color`로 focus 스타일을 주면 요소 바깥에 그려지기 때문에 부모에 `overflow: auto/hidden`이 있으면 잘림.
`box-shadow: inset 0 0 0 2px color`로 바꾸면 요소 안쪽으로 그려져서 해결됨.


```
/* Before: 잘림 */
box-shadow: 0 0 0 2px #d1d5db;

/* After: 안 잘림 */
box-shadow: inset 0 0 0 2px #d1d5db;
```