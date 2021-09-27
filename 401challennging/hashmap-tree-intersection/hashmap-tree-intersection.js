"use strict";

const Node = require('./node');

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


  treeIntersection(firstTree, secondTree) {
    if (!firstTree || !secondTree) throw new Error('There is no root to comapare');
    let array = [];
    const traverse = (node1, node2) => {
      if (node1 && node2) {
        if (node1.value === node2.value) {
          array.push(node1.value);
          console.log(array);
        }
        if (node1.left, node2.left) traverse(node1.left, node2.left);
        if (node1.right, node2.right) traverse(node1.right, node2.right);
      }
      return array;
    }
    traverse(firstTree, secondTree);
    return array;
  }
}



module.exports = BinaryTree;