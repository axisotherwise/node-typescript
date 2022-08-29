# remind typescript
- 타입 스크립트는 최종적으로 자바스크립트 파일로 변환되며 노드와 브라우저는 자바스크립트 파일을 실행한다. 타입스크립트 파일을 실행하는 게 아니라 컴파일의 결과물인 자바스크립트 파일을 실행한다.

- 타입스크립트는 컴파일러(tsc)다. 컴파일이란 타입스크립트 코드를 자바스크립트 코드로 변환시켜주는 과정을 의미한다.

- 컴파일(tsc)은 tsconfig.json(tsc --init)에 따라 타입스크립트 코드를 자바스크립트 코드로 바꿔준다. 타입스크립트와 자바스크립트 파일 모두 영향을 끼치므로 tsconfig.json 설정 파일을 반드시 확인해야 한다.

## tsconfig.json
- tsconfig.json 타입스크립트 프로젝트 명시 설정 파일 이 파일이 있는 디렉토리가 프로젝트의 루트 디렉토리가 된다.

#### compilerOptions
1. "moduleResolution": "node" 컴파일러가 임포트가 어떤 타입을 참조하는지 알아내기 위한 프로세스
2. "typeRoots": ["./types"] 지정한 경로에있는 d.ts 파일의 타입이 우선 순위가되어 참조된다. 

#### files
  
## 설치
- 라이브러리 타입 지원 npm에서 확인 후 설치
- npm i typescript @types/node
- npm i express @types/express
- npm i -D ts-node (ts-node가 ts 파일을 js 파일로 변경 후 실행 개발용)
- npm i -D nodemon

## 명령어
- npx ts-node server.ts
- npx tsc --traceResolution 컴파일러의 타입 참조 프로세스

## 배포 환경 (변환)
- npx tsc
타입스크립트 파일을 컴파일 후 자바스크립트 파일로 변환하여 자바스크립트를 배포한다.

## 개발 환경 (실행)
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

### syntax
- process.env.ID! 무조건 있다라고 타입스크립트에게 알려준다.
- readonly 변경여지가 없다.
- process.env.NODE_ENV as ("a" || "b" || "c") 타입스크립트는 env값을 정확히 추론할 수 없어 직접 값을 지정해줘야한다.

- 클래스 자체가 타입이 될 수 있다.
```typescript
  class User {
  public id!: number;
  public name!: string;
  public nickname!: string;
  public password! : string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
};

const user: User = {
  id: 1,
  name: "name",
  nickname: "nickname",
  password: "password",
  createdAt: new Date(),
  updatedAt: new Date(),
}
```

- 제네릭
```typescript
  const isVerify = <T extends {}>(_: T): T => {
    return _;
  }

  const result = isVerify<boolean>(true);
```
```typescript
interface IUser<T> {
  id: number;
  name: string;
  password: string;
  createdAt: T;
}

const user: IUser<Date> = {
  id: 1,
  name: "name",
  password: "password",
  createdAt: new Date()
}
```

- 클래스
```typescript
class User {
  public name: string;
  public gender?: boolean;
  constructor(name: string, gender?: boolean) {
    this.name = name;
    this.gender = gender;
  }
  
  hello(): string {
    return this.name;
  }
  static sayHello(word: string): string {
    return word;
  }
}

const user = new User("user").hello();
const result = User.sayHello("sayHello");
```


### 커스텀 타입 확장
- 원하는 타입이 없을 경우 기존 타입에서 확장할 수 있다.
- 글로벌과 앰비언트 모듈 2가지 방법으로 확장할 수 있으며 글로벌 확장일 경우 기존 라이브러리가 이미 확장한 경우 추가 확장 시 서로 충돌하여 오류가 발생할 수 있다. 라이브러리별로 적합한 확장 방법이 다르므로 상황에 맞게 확장한다.
1. declare global
```typescript
dtos/user.ts
export interface User {
  id: number;
  email: string;
  password: string;
}

types/user.d.ts
import { User } from "../dtos/user";

declare global {
namespace Express {
  interface Request {
      user: User;
    }
  }
}
```

2. declare module
```typescript
dtos/user.ts
export interface User {
  id: number;
  email: string;
  password: string;
}

types/user.d.ts
import { User } from "../dtos/user";

declare module "express-serve-static-core" {
  interface Request {
    user: User;
  }
}
```


