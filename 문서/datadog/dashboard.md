## p50, p95 등의 통계 보기

- metric을 보낼 때 type이 distribution이여야 p50, p95 등을 깔 수 있다.
- Metrics > metric name 선택 > Advanced > percentiles에서 ON으로 변경해야 p50, p95등을 볼 수 있다.

## 필터

- metric에 `$service` 이런식으로 넣고 filter에 service를 추가하면 서비스별 시간을 볼 수 있다.
- `$service`가 변수로 적용되기 때문에 적용하지 않은건 필터를 바꿔도 항상 동일함.
- 기본은 \*으로 되어있기 때문에 필터가 없는 모든 서비스의 평균으로 적용됌.
