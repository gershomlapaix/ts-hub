class Stack<T> {
  private elements: T[] = [];

  constructor(private size: number) {}

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  isFull(): boolean {
    return this.elements.length == this.size;
  }

  public push(elem: T) {
    if (this.isFull()) {
      throw new Error("Stack overflow.");
    }
    this.elements.push(elem);
  }

  public pop(): T {
    if (this.isEmpty()) {
      throw new Error("The stack is empty. Please insert some elements first.");
    }

    return this.elements.pop();
  }
}

let numbers = new Stack<number>(5);
function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

while (!numbers.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Push ${n} into the stack.`)
    numbers.push(n);
}

while (!numbers.isEmpty()) {
    let n = numbers.pop();
    console.log(`Pop ${n} from the stack.`);
}