let employee: object;

employee = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

console.log(employee);

// employee = "Jane"         // error TS2322: Type '"Jane"' is not assignable to type 'object
// console.log(employee.hireDate);        // error TS2339: Property 'hireDate' does not exist on type 'object'.

// Another declaration way
let employee2: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

console.log(employee2)



export {};
