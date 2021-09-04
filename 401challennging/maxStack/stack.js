"use strict";

const Node = require("./node");

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return null;

    let temp = this.first;

    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return temp;
  }

  gitMax(){
    if(!this.first){
      return 'the stack is empty '
    }

    let current=this.first;
    let final=this.first;
    console.log(final);
    while (final) {
      if(current.value<current.next.value){
        current=current.next;
      }
      final=final.next;
    }
    return current.value
  }

  peek() {
    let value;
    if (this.first) {
      value = this.first.value;
      return value;
    }
    
  }

  isEmpty() {
    if (!this.first) {
      return false;
    }
    return true;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(30);
stack.push(20);

console.log(stack.gitMax());

module.exports = Stack;