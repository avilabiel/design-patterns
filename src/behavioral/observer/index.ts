interface Publisher {
  attach(observer: StateObserver): void;

  remove(observer: StateObserver): void;

  notify(): void;
}

class StatePublisher implements Publisher {
  public state: number = 0;
  public observers: StateObserver[] = [];

  public attach(observer: StateObserver): void {
    const isExist = this.observers.includes(observer);

    if (isExist) {
      return console.log('StatePublisher: StateObserver has been attached already.');
    }

    console.log('StatePublisher: Attached an observer.');
    this.observers.push(observer);
  }

  public remove(observer: StateObserver): void {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex === -1) {
      return console.log('StatePublisher: Nonexistent observer.');
    }

    this.observers.splice(observerIndex, 1);
    console.log('StatePublisher: Detached an observer.');
  }

  public notify(): void {
    console.log('StatePublisher: Notifying observers...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public someBusinessLogic(): void {
    console.log("StatePublisher: I'm doing something important.");
    this.state = Math.floor(Math.random() * (10 + 1));

    console.log(`StatePublisher: My state has just changed to: ${this.state}`);

    this.notify();
  }
}

interface StateObserver {
  update(statePublisher: Publisher): void;
}

class ComponentA implements StateObserver {
  previousState: number = 0;

  public update(subject: Publisher): void {
    if (subject instanceof StatePublisher && subject.state != this.previousState) {
      console.log('ComponentA: Reacted to the event.');
      // Do more here...
    }
  }
}

class ComponentB implements StateObserver {
  public update(subject: Publisher): void {
    if (subject instanceof StatePublisher && (subject.state === 0 || subject.state >= 2)) {
      // Do more here...
      console.log('ComponentB: Reacted to the event.');
    }
  }
}

const subject = new StatePublisher();

const observer1 = new ComponentA();
subject.attach(observer1);

const observer2 = new ComponentB();
subject.attach(observer2);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.remove(observer2);

subject.someBusinessLogic();

// [LOG]: "StatePublisher: Attached an observer."
// [LOG]: "StatePublisher: Attached an observer."
// [LOG]: "StatePublisher: I'm doing something important."
// [LOG]: "StatePublisher: My state has just changed to: 2"
// [LOG]: "StatePublisher: Notifying observers..."
// [LOG]: "ComponentA: Reacted to the event."
// [LOG]: "ComponentB: Reacted to the event."
// [LOG]: "StatePublisher: I'm doing something important."
// [LOG]: "StatePublisher: My state has just changed to: 6"
// [LOG]: "StatePublisher: Notifying observers..."
// [LOG]: "ComponentA: Reacted to the event."
// [LOG]: "ComponentB: Reacted to the event."
// [LOG]: "StatePublisher: Detached an observer."
// [LOG]: "StatePublisher: I'm doing something important."
// [LOG]: "StatePublisher: My state has just changed to: 1"
// [LOG]: "StatePublisher: Notifying observers..."
// [LOG]: "ComponentA: Reacted to the event."
