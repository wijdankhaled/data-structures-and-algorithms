'use strict'
const node =require('./Node');
class LL {
    constructor() {
        this.head = null;
        this.size=0;
        this.tail=null;
    }
    append(value){
        const node =new Node(value);
        if(!this.head){
            this.head=node;
            return this;
        }
        let current=this.head;
        while(current.next){
            current.next=current;
        }
        current.next=node;
        return this;
    }

    insert(value){
        const node = new Node(value);
        if (!this.head){
            this.head=node ;
            this.tail=this.head;

        }
        else{
            this.tail=node;
            this.tail.next=node ;
        }
          this.size++;
          return this.head;
    }
    includes(value){
        const current=this.head;
        while(current){
            if(current.value=== value){
                console.log(`the ${value} is founded in the list`);
                return true;
            }
            current=current.next;
        }
        console.log(`the ${value} is not found in the list`);
        return false;
    }
    toString(){
       const current=this.head;
       if(!cuurent){
           console.error('the linked list dose not exisit')
       }
       const result='';
       while(current){
           result += `{${current.value}}`
           current=current.next;
       }
        return (result+='null');
    }
}
module.exports = LL;