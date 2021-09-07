"use strict";

const BinaryTree = require("../binaryTree");
const Node = require("../node");


describe("binary tree", () => {
  it("return max value", () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    let tree = new BinaryTree();

    tree.root = one;
    let expected = 5;
    expect(tree.findMaximumValue()).toEqual(expected);
  });

  it("return if empty", () => {
    let tree = new BinaryTree();
    expect(tree.findMaximumValue()).toEqual('the tree is empty');
  });

  it("should do breadth first", () => {
    let expectedValue = [2, 7, 5, 2, 6, 9, 5, 11, 4];

let A = new Node(2);
let B = new Node(7);
let D = new Node(2);
let E = new Node(6);
let C = new Node(5);
let F = new Node(9);
let J = new Node(5);
let H = new Node(11);
let I = new Node(4);

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.right = F;
E.left = J;
E.right = H;
F.left = I;

    let tree = new BinaryTree();

    tree.root = A;
    expect(tree.breadthFirstSearch(A)).toEqual(expectedValue);
  });

  it("return if empty", () => {
    let tree = new BinaryTree();
    expect(tree.findMaximumValue()).toEqual("the tree is empty");
  });
  
});