class Person {
  private ssn: string;
  private lastname: string;
  private firstname: string;

  constructor(ssn: string, firstname: string, lastname: string) {
    this.ssn = ssn;
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

class Person2 {
  readonly birthDate: Date;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

let person = new Person2(new Date(1990, 12, 25));
// person.birthDate = new Date(1991, 12, 25); // Compile error


export {};
