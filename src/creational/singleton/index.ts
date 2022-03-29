type ConnectionOptions = {
  username: string;
  password: string;
};

class DatabaseStorage {
  private static instance: DatabaseStorage | null = null;
  private connectionOptions = {};

  private constructor(connectionOptions: ConnectionOptions) {
    this.connectionOptions = connectionOptions;
  }

  static getOrBuild(connectionOptions: ConnectionOptions = { username: 'root', password: 'root' }) {
    if (!this.instance) {
      this.instance = new DatabaseStorage(connectionOptions);
    }

    return this.instance;
  }
}

const databaseStorage = DatabaseStorage.getOrBuild(); // builiding the instance
const secondDatabaseStorage = DatabaseStorage.getOrBuild(); // getting the instance

console.log(databaseStorage === secondDatabaseStorage); // true
