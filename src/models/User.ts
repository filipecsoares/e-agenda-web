export default class User {
  id: number | null;

  name: string;

  email: string;

  phone: string;

  password: string | null;

  constructor(
    id: number | null,
    name: string,
    email: string,
    phone: string,
    password: string | null,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }
}
