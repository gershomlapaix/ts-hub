interface Person {
  firstName: string;
  lastName: string;
}

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

let john = {
  firstName: "John",
  lastName: "Doe",
};

console.log(getFullName(john));

let jane = {
  firstName: "Jane",
  middleName: "K.",
  lastName: "Doe",
  age: 22,
};

let fullName = getFullName(jane);
console.log(fullName); // Jane Doe

/**
 * optional properties
 * readonly propeties
 *
 */

// function types
interface stringFormat {
  (str: string, isUpper: boolean): string;
}

let format: stringFormat;

format = function (src: string, upper: boolean) {
  return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
};

console.log(format("la", true));

// Class types

interface Json {
  toJSON(): string;
}

class Person3 implements Json {
  constructor(private firstName: string, private lastName: string) {}

  toJSON(): string {
    return JSON.stringify(this);
  }
}

let psn = new Person3("La", "Gersh");
console.log(psn.toJSON());
