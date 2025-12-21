- 도커 내부 이슈로 아래와 같은 에러가 뜨는 경우가 있다.
- 그럴때는 rosetta를 수동설치하자
- [관련링크](https://github.com/docker/for-mac/issues/7243)

```
Docker Desktop - Rosetta installation failed
An error occurred while installing Rosetta. Retry or continue without Rosetta.

installing Rosetta: exit status 42
```

`sudo softwareupdate --install-rosetta --agree-to-license`
