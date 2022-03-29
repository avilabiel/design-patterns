interface UserInterface {
  createButton(): Button;
  createDialog(): Dialog;
}

interface Button {
  clickOn(): void;
}

interface Dialog {
  open(): void;
  close(): void;
}

class WindowsUI implements UserInterface {
  createButton(): Button {
    return new WindowsButton();
  }

  createDialog(): Dialog {
    return new WindowsDialog();
  }
}

class MacUI implements UserInterface {
  createButton(): Button {
    return new MacButton();
  }

  createDialog(): Dialog {
    return new MacDialog();
  }
}

class WindowsDialog implements Dialog {
  open(): void {
    console.log('Closing Windows dialog...');
  }

  close(): void {
    console.log('Closing Windows dialog...');
  }
}

class WindowsButton implements Button {
  clickOn(): void {
    console.log('Clickin on Windows button...');
  }
}

class MacDialog implements Dialog {
  open(): void {
    console.log('Closing Mac window...');
  }

  close(): void {
    console.log('Closing Mac window...');
  }
}

class MacButton implements Button {
  clickOn(): void {
    console.log('Clickin on Mac button...');
  }
}

class Application {
  userInterfaceFactory: UserInterface;
  dialog: Dialog;
  button: Button;

  constructor(userInterfaceFactory: UserInterface) {
    this.userInterfaceFactory = userInterfaceFactory;

    this.button = this.userInterfaceFactory.createButton();
    this.dialog = this.userInterfaceFactory.createDialog();
  }
}

const app = new Application(new MacUI());
app.button.clickOn();
app.dialog.open();
// [LOG]: "Clickin on Mac button..."
// [LOG]: "Closing Mac window..."
