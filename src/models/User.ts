export default class User {
    name: string;

    email: string;

    phone: string;

    password: string | null;

    constructor(name: string, email: string, phone: string, password: string | null) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.password = password;
    }
}
