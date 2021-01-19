import LinkedList from "./classes/LinkedList.js";
import Stack from "./classes/Stack.js";
import Queue from "./classes/Queue.js";

function main () {
  const queue = new Queue();

  queue.enqueue("person1");
  queue.enqueue("person2");
  queue.enqueue("person3");
  queue.dequeue();

  console.log(queue.toArray());
}

window.addEventListener("load", main);
