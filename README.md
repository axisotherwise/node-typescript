# Typescript in node remind
노드는 ts 파일을 실행할 수 없다.
ts 파일을 자바스크립트로 변환해주는 트랜스파일(컴파일) 과정이 필요하다. 


## 파일
- tsconfig.json
타입스크립트 프로젝트 명시 
ㅡ>compilerOptions(컴파일 옵션 서버랑 프론트 옵션의 차이가있음)

## 설치
- npm i typescript @types/node
- npm i express @types/express
- npm i -D ts-node (ts-node가 ts 파일을 js 파일로 변경 후 실행 개발용)
- npm i -D nodemon

## 실행
npx ts-node server.ts

### 라이브러리 타입 지원
d.ts ㅡ> export default 없다면 * as

#### 미들웨어 타입
RequestHandler / ErrorRequestHandler

#### Request generic
```typescript
  interface RequestHandler<P extends core.Params = core.ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = core.Query>
  (req: RequestHandler<any, any, any, { postId: Int, }>)
```

#### 글로벌 네임스페이스(전역)
```typescript
  declare global {
    namespace Express {
      interface Request {}
      interface Response {}
      interface Application {}
    }
  }
```

