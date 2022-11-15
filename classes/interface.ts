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
