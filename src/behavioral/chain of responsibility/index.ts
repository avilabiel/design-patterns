interface Middleware {
  setNext(middleware: Middleware): Middleware;

  execute(request: string): string;
}

abstract class ExpressMiddleware implements Middleware {
  private nextMiddleware: Middleware | undefined;

  public execute(request: string): string {
    if (this.nextMiddleware) {
      return this.nextMiddleware.execute(request);
    }

    return request;
  }

  public setNext(middleware: Middleware): Middleware {
    this.nextMiddleware = middleware;

    return middleware;
  }
}

class FirstController extends ExpressMiddleware {
  public execute(request: string): string {
    console.log('First Controller just receives the request');

    return super.execute(request);
  }
}

class SecondController extends ExpressMiddleware {
  public execute(request: string): string {
    console.log('Second Controller appends word "Aiden"');
    request += ' Aiden';
    return super.execute(request);
  }
}

const firstController = new FirstController();
const secondController = new SecondController();

firstController.setNext(secondController);

const output = firstController.execute('Hello');
console.log(output); // Hello Aiden
