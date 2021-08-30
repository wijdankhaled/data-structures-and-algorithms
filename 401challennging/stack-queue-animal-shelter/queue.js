"use strict";


const Stack=require('./stack');

class Queue{
    constructor(){
      this.pushStack = new Stack();
      this.popStack = new Stack();
      this.size = 0;
    }

    enqueue(value){
        this.pushStack.push(value);
        this.size = this.pushStack.length + this.popStack.length;
    }

    dequeue(){
        if (this.popStack.length > 0) {
            this.size = this.pushStack.length + this.popStack.length - 1;
            return this.popStack.pop();
        }

        while(this.pushStack.length > 0) {
            this.popStack.push(this.pushStack.pop())
        }

        this.size = this.pushStack.length + this.popStack.length - 1;
        return this.popStack.pop();
    }
    

    peek(){
        let value;
        if (this.front) {
            value=this.front.value;
            return value
        }
        throw new Error('the Queue is empty'); 
    }

    isEmpty(){
        if(!this.front){
            throw new Error('the Queue is empty'); 
        }
        return 'the Queue have values'
    }
    
}

module.exports=Queue;