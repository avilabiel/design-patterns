enum EngineModel {
  '1.0',
  '2.0',
  '3.0',
  '5.0',
}

type Engine = {
  model: EngineModel;
  isV6: boolean;
  isAutomatic: boolean;
};

type Car = {
  seats: number;
  engine: Engine;
  doesHaveGPS: boolean;
};

interface CarBuilder {
  setSeats(seats: number): void;
  setEngine(engine: Engine): void;
  setGPS(doesHaveGPS: boolean): void;
  createCar(): Car;
}

class CarManualBuilder implements CarBuilder {
  seats: number;
  engine: Engine;
  doesHaveGPS: boolean;

  setSeats(seats: number): void {
    this.seats = seats;
    // More logic to install seats here...
  }

  setEngine(engine: Engine): void {
    this.engine = engine;

    // More logic to install engine here...
  }

  setGPS(doesHaveGPS: boolean): void {
    this.doesHaveGPS = doesHaveGPS;

    // More logic to install GPS here...
  }

  createCar(): Car {
    return {
      seats: this.seats,
      engine: this.engine,
      doesHaveGPS: this.doesHaveGPS,
    };
  }
}

class CarAutomaticBuilder implements CarBuilder {
  seats: number;
  engine: Engine;
  doesHaveGPS: boolean;

  setSeats(seats: number): void {
    this.seats = seats;
    // More logic to install seats here...
  }

  setEngine(engine: Engine): void {
    this.engine = engine;
    // More logic to install engine here...
  }

  setGPS(doesHaveGPS: boolean): void {
    this.doesHaveGPS = doesHaveGPS;
    // More logic to install GPS here...
  }

  createCar(): Car {
    return {
      seats: this.seats,
      engine: this.engine,
      doesHaveGPS: this.doesHaveGPS,
    };
  }
}

class CarBuilderDirector {
  private carBuilder: CarBuilder;

  constructor(carBuilder: CarBuilder) {
    this.carBuilder = carBuilder;
  }

  createManualCar(): Car {
    this.carBuilder.setSeats(5);
    this.carBuilder.setEngine({ model: EngineModel['1.0'], isV6: false, isAutomatic: false });
    this.carBuilder.setGPS(false);

    return this.carBuilder.createCar();
  }

  createFamilyCar(): Car {
    this.carBuilder.setSeats(7);
    this.carBuilder.setEngine({ model: EngineModel['2.0'], isV6: false, isAutomatic: false });
    this.carBuilder.setGPS(true);

    return this.carBuilder.createCar();
  }

  createAutomaticCar(): Car {
    this.carBuilder.setSeats(5);
    this.carBuilder.setEngine({ model: EngineModel['1.0'], isV6: false, isAutomatic: true });
    this.carBuilder.setGPS(true);

    return this.carBuilder.createCar();
  }

  createSportCar(): Car {
    this.carBuilder.setSeats(2);
    this.carBuilder.setEngine({ model: EngineModel['5.0'], isV6: true, isAutomatic: true });
    this.carBuilder.setGPS(true);

    return this.carBuilder.createCar();
  }
}

const carBuilderDirector = new CarBuilderDirector(new CarAutomaticBuilder());
const sportCar = carBuilderDirector.createSportCar();
const familyCar = carBuilderDirector.createFamilyCar();
