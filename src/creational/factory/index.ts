abstract class Transport {
  deliver(): void {}

  createDeliverWithLogs() {
    const deliver = this.deliver();

    // Business logic appliable for all kind of transports
    console.log('Business logic here for logs...');
  }
}

interface Delivery {
  id: number;
  weight: number;
  price: number;
}

class Truck extends Transport {
  deliver(): Delivery {
    // truck deliver code here
    console.log('Delivering by Truck...');

    return { id: 1, weight: 1, price: 1 };
  }
}

class Train extends Transport {
  deliver(): Delivery {
    // train deliver code here
    console.log('Delivering by Train...');

    return { id: 1, weight: 2, price: 2 };
  }
}

class AirPlane extends Transport {
  deliver(): Delivery {
    // air plane deliver code here
    console.log('Delivering by Air plane...');

    return { id: 1, weight: 3, price: 3 };
  }
}

class Application {
  transport: Transport;

  constructor(transport: Transport) {
    this.transport = transport;
  }

  makeADelivery(): void {
    this.transport.createDeliverWithLogs();
  }
}

const app = new Application(new AirPlane());
app.makeADelivery();
// [LOG]: "Delivering by Air plane..."
// [LOG]: "Business logic here for logs..."
