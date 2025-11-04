## 여러 브랜치 제거

- feature가 붙은 브랜치 제거: git branch -D `git branch --list 'feature*'`
- 모든 로컬 브랜치 제거: git branch -D `git branch --list '*'`
- 현재 브랜치의 PR 목록 가져오기(base 브랜치에서 사용)

```
gh pr list \
  --state all \
  --json number \
  --jq "sort_by(.number) | .[].number" \
  --base $(git rev-parse --abbrev-ref HEAD) \
| sed 's/^/- #/'
```

## PR 제목으로 커밋 찾기

`git log --oneline --grep="1234"`
