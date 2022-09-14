type TCustomException = Error;

class BasicException implements TCustomException {
  name: string;
  message: string;
  statusCode: number;

  constructor(message: string) {
    this.name = "BasicException";
    this.message = message;
    this.statusCode = 500;
  }
}

class Error404 extends BasicException {
  name: string;
  statusCode: number;

  constructor(message: string) {
    super(message);

    this.name = "404 에러 발생";
    this.statusCode = 404;
  }
}

export {
  BasicException,
  Error404,
}