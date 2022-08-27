# remind typescript
- 타입 스크립트는 최종적으로 자바스크립트 파일로 변환되며 노드와 브라우저는 자바스크립트 파일을 실행한다. 타입스크립트 파일을 실행하는 게 아니라 컴파일의 결과물인 자바스크립트 파일을 실행한다.

- 타입스크립트는 컴파일러(tsc)다. 컴파일이란 타입스크립트 코드를 자바스크립트 코드로 변환시켜주는 과정을 의미한다.

- 컴파일(tsc)은 tsconfig.json(tsc --init)에 따라 타입스크립트 코드를 자바스크립트 코드로 바꿔준다. 타입스크립트와 자바스크립트 파일 모두 영향을 끼치므로 tsconfig.json 설정 파일을 반드시 확인해야 한다.

## 파일
- tsconfig.json 타입스크립트 프로젝트 명시 설정 파일 
- compilerOptions 컴파일 옵션 설정  
  
## 설치
- 라이브러리 타입 지원 npm에서 확인 후 설치
- npm i typescript @types/node
- npm i express @types/express
- npm i -D ts-node (ts-node가 ts 파일을 js 파일로 변경 후 실행 개발용)
- npm i -D nodemon

## 실행
- npx ts-node server.ts

## 배포 환경
- npx tsc
타입스크립트 파일을 컴파일 후 자바스크립트 파일로 변환하여 자바스크립트를 배포한다.

## 개발 환경
- npx ts-node
실행 시 타입스크립트 파일을 자바스크립트 파일로 컴파일 후 실행. 배포 환경에서는 사용하지 않는다.
- npx tsc --traceResolution

### 라이브러리 타입 지원 확인 NPM 패키지
- TS ㅡ> 자체적으로 타입 지원
- DT ㅡ> @types 커뮤니티에서 지원하는 타입 설치
- 모두 없으면 타입 직접 작성

### 노드
- d.ts 파일에 export default가 없다면 * as ("moduleResolution": true/false)

- 미들웨어 타입
```typescript
  import { Application, RequestHandler, ErrorRequestHandler} from "express";
```

- Request generic
```typescript
  interface RequestHandler<P extends core.Params = core.ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = core.Query>
  (req: RequestHandler<any, any, any, { postId: Int, }>)
```
```typescript
  Request<params, res.body, req.body, req.query>
```

- 글로벌 네임스페이스(전역)
```typescript
  declare global {
    namespace Express {
      interface Request {}
      interface Response {}
      interface Application {}
    }
  }
```

