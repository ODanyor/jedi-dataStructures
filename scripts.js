import { LinkedList } from "./modules/linkedList.js";
import { Stack } from "./modules/stack.js";
import { Queue } from "./modules/queue.js";

function main () {
  const queue = new Queue();

  queue.enqueue("person1");
  queue.enqueue("person2");
  queue.enqueue("person3");
  queue.dequeue();

  console.log(queue.toArray());
}

window.addEventListener("load", main);
