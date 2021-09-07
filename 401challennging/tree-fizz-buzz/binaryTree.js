'use strict'

const Node=require('./node')

class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder() {
    let result = [];
    let travers = (node) => {
      result.push(node.value);
      if (node.left) {
        travers(node.left);
      }
      if (node.right) {
        travers(node.right);
      }
    };
    travers(this.root);
    return result;
  }

  inOrder() {
    let result = [];
    let travers = (node) => {
      if (node.left) {
        travers(node.left);
      }
      result.push(node.value);
      if (node.right) {
        travers(node.right);
      }
    };
    travers(this.root);
    return result;
  }

  postOrder() {
    let result = [];
    let travers = (node) => {
      if (node.left) {
        travers(node.left);
      }
      if (node.right) {
        travers(node.right);
      }
      result.push(node.value);
    };
    travers(this.root);
    return result;
  }

  findMaximumValue() {
    if (!this.root) {
      return "the tree is empty";
    }
    let maxNumber = this.root.value;
    let travers = (node) => {
      if (node.left) travers(node.left);
      if (node.right) travers(node.right);
      if (node.value > maxNumber) maxNumber = node.value;
    };

    travers(this.root);
    return maxNumber;
  }

  breadthFirstSearch(tree) {
    if (!this.root) {
      return "empty";
    }
    let queue = [tree];
    let result = [];
    while (queue.length > 0) {
      let item = queue.shift();
      let value = item.value;
      console.log(value);
      result.push(value);
      if (item.left == null && item.right == null) {
        continue;
      }
      if (item.left != null) {
        queue.push(item.left);
      }

      if (item.right != null) {
        queue.push(item.right);
      }
    }
    return result;
  }
}

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

console.log(tree.breadthFirstSearch(one))


module.exports = BinaryTree;