class Legacy {
  reverseDisplay(): string {
    return '!roivaheb driew a sah edoc ycagel yM';
  }
}

class CurrentClient {
  display(text: string): string {
    // more display logic here...
    return text;
  }
}

class Adapter extends CurrentClient {
  private legacy: Legacy;

  constructor(legacy: Legacy) {
    super();
    this.legacy = legacy;
  }

  display(): string {
    const rightDisplay = this.legacy.reverseDisplay().split('').reverse().join('');
    return super.display(rightDisplay);
  }
}

const currentDisplay = new CurrentClient().display('My current display!');
const legacyDisplay = new Legacy().reverseDisplay();
const adaptedLegacyDisplay = new Adapter(new Legacy()).display();

console.log(currentDisplay);
console.log(legacyDisplay);
console.log(adaptedLegacyDisplay);

// [LOG]: "My current display!"
// [LOG]: "!roivaheb driew a sah edoc ycagel yM"
// [LOG]: "My legacy code has a weird behavior!"
