'use strict'
const Node=require('../Node')

decribe('node',()=>{
it ('should creat new node',()=>{
    //arang
    let value='some value';
    //act
    let node=new Node(value);
    //asert
    expect(node.value).toEqual(value);
    expext(node.next).toBeNull();
})

})