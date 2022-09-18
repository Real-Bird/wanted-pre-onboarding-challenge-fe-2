# 프리온보딩 9월 챌린지 - TypeScript

## 설치 및 실행

```bash
npm install
npm run dev
```

## 주안점

- `function` 에서 `class`로 변경.
  - `도메인 로직`을 분리하여 `controller` 클래스에서만 조작 가능하도록 구현.
- `type signatures` 재정의.
- ~~전역 `type` 선언 시 코드 내 에러는 발생하지 않으나 런타임이 안 됨.~~
  - 해결 : `tsconfig.json`에 `"ts-node":{"files":true}` 추가.

## 한계점

- `class` 미숙으로 아직 `접근 한정자`를 잘 다루지 못함.

## 참고

[과제 안내](https://gist.github.com/pocojang/3c3d4470a3d2a978b5ebfb3f613e40fa)
[velog.io/@yijaee - JSDoc을 사용해 JavaScript 파일 문서화하기](https://velog.io/@yijaee/JSDoc%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4-JavaScript-%ED%8C%8C%EC%9D%BC-%EB%AC%B8%EC%84%9C%ED%99%94%ED%95%98%EA%B8%B0)
