function getRandomElement<T>(items: T[]): T {
  let randomNum: number = Math.floor(Math.random() * items.length);
  return items[randomNum];
}

let nums = [12, 45, 5];
let randomEl = getRandomElement<number>(nums);
console.log(randomEl);

// merge
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}

let result = merge({ name: "John" }, { jobTitle: "Frontend Developer" });

console.log(result);

// TYpe parameter
function prop<T, K extends keyof T>(obj: T, Key: K) {
  return obj[Key];
}

let str = prop({ name: "Kareem" }, "name");
console.log(str);
