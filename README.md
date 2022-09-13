# 프리온보딩 9월 챌린지 - TypeScript

## 과제 명세

- [ ] 필요한 데이터를 모두 모델링한다.
  - [모델링 요구 사항](https://gist.github.com/pocojang/3c3d4470a3d2a978b5ebfb3f613e40fa#-requirements)
- [ ] 사용되는 모든 함수를 선언부만 만든다.
- [ ] 함수 및 클래스의 내부는 구현하지 않습니다.
- [ ] JSDoc을 활용해 문서화한다.
- [ ] GitHub Page를 활용해 JSDoc 정적 페이지를 배포한다.

## 참고

[과제 안내](https://gist.github.com/pocojang/3c3d4470a3d2a978b5ebfb3f613e40fa)
[velog.io/@yijaee - JSDoc을 사용해 JavaScript 파일 문서화하기](https://velog.io/@yijaee/JSDoc%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4-JavaScript-%ED%8C%8C%EC%9D%BC-%EB%AC%B8%EC%84%9C%ED%99%94%ED%95%98%EA%B8%B0)

```typescript
const Route = {
  ABOUT: "/about",
  TOPICS: "/topics",
} as const;

/**
 * 타입 좁히기!!
 */
type RoutePaths = typeof Route[keyof typeof Route];

function changeRoute(newPath: RoutePaths) {
  const state = { page_id: 1, user_id: 5 };
  const title = "";

  history.pushState(state, title, newPath);
}

window.addEventListener("popstate", () => changeRoute("/about"));
```
