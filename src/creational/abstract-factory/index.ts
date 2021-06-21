namespace AbstractFactory {
  interface User {
    email: String;
    role: String;
    privileges: String[];
  }

  abstract class AbstractUserFactory {
    abstract build(email: String): User;
  }

  class RegularUserCreator implements AbstractUserFactory {
    build(email: String): User {
      // you can put more logic from regular user here
      // ...
      return new RegularUser(email);
    }
  }

  class AdminUserCreator implements AbstractUserFactory {
    build(email: String): User {
      // you can put more logic from admin user here
      // ...
      return new AdminUser(email);
    }
  }

  class RegularUser implements User {
    email: String;
    role: String = 'regular';
    privileges: String[] = ['page #1'];

    constructor(email: String) {
      this.email = email;
    }
  }

  class AdminUser implements User {
    email: String;
    role: String = 'admin';
    privileges: String[] = ['page #1', 'page #2', 'page #3'];

    constructor(email: String) {
      this.email = email;
    }
  }

  const regularFactory = new RegularUserCreator();
  const adminFactory = new AdminUserCreator();
  const adminUser = regularFactory.build('admin@test.com');
  const regularUser = adminFactory.build('regular@test.com');

  console.log(adminUser);
  console.log(regularUser);
}
