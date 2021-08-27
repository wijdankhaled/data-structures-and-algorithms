'use strict'

const Queue=require('../queue');

const Queue = require("../queue");
describe("Queue class", () => {
  it("enqueue into a queue ", () => {
    let queue = new Queue();
    queue.enqueue("a");

    expect(queue.front.value).toBe("a");
  });
  it(" enqueue multiple values into a queue", () => {
    let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");

    expect(queue.front.value).toBe("a");
    expect(queue.back.value).toBe("c");
  });
  it(" dequeue out of a queue the expected value", () => {
    let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.dequeue();

    expect(queue.front.value).toBe("b");
    expect(queue.back.value).toBe("c");
    expect(queue.dequeue()).toBe("b");
  });
  it(" peek into a queue", () => {
    let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");

    expect(queue.front.value).toBe("a");
    expect(queue.back.value).toBe("c");
    expect(queue.peek()).toBe("a");
  });
  it("empty a queue ", () => {
    let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.dequeue();
    queue.dequeue();
    

    expect(queue.front).toBe(null);
    expect(queue.back).toBe(null);
  });
  it(" instantiate an empty queue", () => {
    let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    let newQueue=new Queue();

    expect(newQueue).toBeInstanceOf(Queue);
    expect(queue.isEmpty()).toBe("the Queue have values");
  });

});