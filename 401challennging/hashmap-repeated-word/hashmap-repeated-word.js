const LinkedList = require('../HashTables/linkedList');

class hasmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  hash(key) {
     // hashing algorithm
    const sumCharCode = key.split("").reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }

  add(key, value) {
    // get an index
    // This method should hash the key, and add the key and value pair to the table
    const hash = this.hash(key);
    if (!this.storage[hash]) {
      const ll = new LinkedList();
      ll.insert({ [key]: value });
      this.storage[hash] = ll; 
    } else {
      this.storage[hash].insert({ [key]: value });
    }
  }
// get method return  Value associated with that key in the table
  get(key) {
    const hash = this.hash(key);
    if (this.storage[hash]) {
      let currentNode = this.storage[hash].head;
      while (currentNode) {
        if (currentNode.value[key]) {
          return currentNode.value[key];
        }
        currentNode = currentNode.next;
      }
    } else {
      return null;
    }
  }
  // contains method return Boolean, indicating if the key exists in the table already

  contains(key) {
    const hash = this.hash(key);
    if (this.storage[hash]) {
      let currentNode = this.storage[hash].head;
      while (currentNode) {
        if (currentNode.value[key]) {
          return true;
        }
        currentNode = currentNode.next;
      }
    } else {
      return false;
    }
  }

  // this function find repeted word in the string 
     repeatedWord(string) {
    let words = string.toLowerCase().split(" ");
    let hashmap = new Hashmap(words.length);
    for (let i = 0; i < words.length; i++) {
      if (!hashmap.contain(words[i])) {
        hashmap.add(words[i], words[i]);
      } else {
        return words[i];
      }
    }
    return null;
  }
}

module.exports = hasmap;