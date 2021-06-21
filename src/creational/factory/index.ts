class RegularUser {
  email: String;
  role: String = 'regular';
  privileges: String[] = ['page #1'];

  constructor(email: String) {
    this.email = email;
  }
}

class AdminUser {
  email: String;
  role: String = 'admin';
  privileges: String[] = ['page #1', 'page #2', 'page #3'];

  constructor(email: String) {
    this.email = email;
  }
}

class UserFactory {
  static build(email: String, role: String) {
    if (role === 'admin') {
      return new AdminUser(email);
    }

    if (role === 'regular') {
      return new RegularUser(email);
    }

    throw new Error('User type not found');
  }
}

const adminUser = UserFactory.build('admin@test.com', 'admin');
const regularUser = UserFactory.build('regular@test.com', 'regular');

console.log(adminUser.role, adminUser.privileges);
console.log(regularUser.role, regularUser.privileges);
