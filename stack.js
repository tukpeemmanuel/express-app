// generate a stack class
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// create a new stack
let stack = new Stack();

// push elements into the stack
stack.push(10);
stack.push(20);
stack.push(30);

// print the stack
console.log(stack.printStack()); // Output: 10 20 30

// pop an element from the stack
console.log(stack.pop()); // Output: 30

// print the stack again
console.log(stack.printStack()); // Output: 10 20