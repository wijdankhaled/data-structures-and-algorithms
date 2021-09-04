"use strict";

const Stack = require("../stack");

describe("get stack", () => {
  it("sould finde the max form stack", () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(9);
    stack.push(4);

    expect(stack.gitMax()).toEqual(9);
  });

  it("empty stack", () => {
    let stack = new Stack();

    expect(stack.gitMax()).toEqual('the stack is empty');
  });
});