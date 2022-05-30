## notice_ts
노드는 자바스크립트 실행기이므로 타입스크립트를 실행할 수 없다.

타입스크립트를 자바스크립트로 변환(트랜스파일) 후 그 결과물을 노드가 실행한다.  
  
노드에 타입스크립트를 적용하는 이유
1. 자바스크립트는 인터프리터 언어이므로 실행을 해봐야 에러가 있는지 알 수 있다.
2. 자바스크립트는 싱글 스레드이므로 에러가 나면 서버가 죽는다. (서비스 중단)
3. PM2 FOREVER 등 서버가 죽으면 되살려주는 도구를 사용해도 코드 자체에 에러가 있다면 근본적으로 소용없다.
4. 타입스크립트는 자바스크립트에서 가장 많이 하는 실수(cannot read property of ... / ... is not a function)를 막아준다.
5. 타입스크립트를 적용하면 코드가 길어져 생산성이 낮아지지만 이런 단점을 감수하더라도 서버는 안정성이 매우 중요하다.
