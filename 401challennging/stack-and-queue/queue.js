'use strict'
const Node=require('./node');


class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
    }

    enqueue(value){
        let newNode=new Node(value);
        if(!this.front){
            this.front=newNode;
            this.rear=newNode;
        }else{
            this.rear.next=newNode;
            this.rear=newNode;
        }
    }

    dequeue(){
        if(!this.front){
            throw new Error('its empty'); 
        }
        let lastNode=this.front;
        if(this.front===this.rear){
            this.rear=null;
        }
        this.front=this.front.next;

        return lastNode.value;
    }

    peek(){
        let value;
        if (this.front) {
            value=this.front.value;
            return value
        }
        throw new Error('its empty'); 
    }

    isEmpty(){
        if(!this.front){
            throw new Error('the Queue is empty'); 
        }
        return 'the Queue have values'
    }
    
}

let queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");

module.exports=Queue;
