interface Log {
  write(content: string): string;
}

class SimpleLog implements Log {
  public write(content: string): string {
    return `Simple Log: ${content}`;
  }
}

class LogDecorator implements Log {
  protected log: Log;

  constructor(log: Log) {
    this.log = log;
  }

  public write(content: string): string {
    return this.log.write(content);
  }
}

class LogMySQL extends LogDecorator {
  public write(content: string): string {
    const modifiedContent = `MySQL Log: ${super.write(content)}`;
    return modifiedContent;
  }
}

class LogTxt extends LogDecorator {
  public write(content: string): string {
    const modifiedContent = `Text Log: ${super.write(content)}`;
    return modifiedContent;
  }
}

const simpleLog = new SimpleLog();
const logMySQL = new LogMySQL(simpleLog);
const logTxt = new LogTxt(logMySQL);

console.log(simpleLog.write('testing...'));
console.log(logMySQL.write('testing MySQL...'));
console.log(logTxt.write('testing Txt...'));

// [LOG]: "Simple Log: testing..."
// [LOG]: "MySQL Log: Simple Log: testing MySQL..."
// [LOG]: "Text Log: MySQL Log: Simple Log: testing Txt..."
