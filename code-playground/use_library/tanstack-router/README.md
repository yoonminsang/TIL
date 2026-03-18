- 현재 경로일 때 data-status가 active로 변함

```
  <Link to="/" className="[&.active]:font-bold">
    Home
  </Link>{' '}
  <Link to="/about" className="[&.active]:font-bold">
    About
  </Link>
```

- 중첩라우팅은 \_를 이용.

ex) auth 레이아웃을 만들고싶다면 다음과 같이 만들 수 있다.

```
routes/_auth.tsx(레이아웃)
routes/_auth/hi.tsx (/hi) _auth 레이아웃적용
routes/_auth/hihi.tsx (/hihi) _auth 레이아웃적용
routes/_auth/auth/index.tsx (/auth) _auth 레이아웃적용
```

ex) 중첩의 중첩 레이아웃

```
routes/_auth/_auth2.tsx (레이아웃)
routes/_auth.tsx(레이아웃)
routes/_auth/auth2/auth/incept.tsx (/incept) _auth, _auth2 레이아웃적용
routes/_auth/hi.tsx (/hi) _auth 레이아웃적용
routes/_auth/hihi.tsx (/hihi) _auth 레이아웃적용
routes/_auth/auth/index.tsx (/auth) _auth 레이아웃적용
```
