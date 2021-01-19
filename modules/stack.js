import { LinkedList } from "./linkedList.js";

class Stack { // LIFO (lust in, first out)
  constructor () {
    this.list = new LinkedList();
  }

  push (value) {
    this.list.prepend(value);
  }

  pop () {
    return this.list.deleteHead();
  }

  isEmpty () {
    return !this.list.head;
  }

  toArray () {
    return this.list.toArray();
  }
}

function stackModule () {
  const stack = new Stack();

  stack.push("A");
  stack.push("B");
  stack.push("C");
  stack.pop();
  stack.pop();

  console.log(stack.toArray());
}

export default stackModule;
