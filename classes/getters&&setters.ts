class Person {
  private _age: number;
  private _firstname: string;
  private _lastname: string;

  public get age() {
    return this._age;
  }

  public set age(newAge: number) {
    if (newAge <= 0 || newAge >= 100) {
      throw new Error("The age is invalid please");
    }

    this.age = newAge;
  }

  public get firstName() {
    return this._firstname;
  }

  public set firstName(fname: string) {
    this._firstname = fname;
  }

  public get lastname() {
    return this._lastname;
  }

  public set lastname(lname: string) {
    if (!lname) {
      throw new Error("Please enter new name");
    }
    this._lastname = lname;
  }

  public getFullName(): string {
    return `${this._firstname} ${this._lastname}`;
  }
}

//  Using getters and setters
let person = new Person();
person.age = 43; // setting the age

console.log(`His age is ${person.age}`);
