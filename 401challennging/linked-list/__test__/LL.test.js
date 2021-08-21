'use strict'
const LL = require('../LL');

describe('linked list', () => {
    it('sould creat empty linked list', () => {
        //arang
        //act
        const list =new LL();
        //asert
        expect(list.head).toBeNull();
    })
    it('sould apped node to an empty LL ', () => {
        //arang
        const list =new LL();
        const value ='first value';
        //act
        list.append(value);
        //asert
        expect(list.head.value).toBe(value);
        expect(list.head.next).toBeNull();
    })
    it('sould  append node to LL with value', () => {
        //arang
        const list =new LL ();
        const value1 ='first value';
        list.append(value1);
        const value2='secound value ';
        //act
        list.append(value);
    
        //asert
        expect(list.head.value).toBe(value1);
        expect(list.head.next.value).toBe(value2);
        expect(list.head.next.next).toBeNull();
    })
    it('sould  include the value true', () => {
        //arang
        const list=new LL();
        const value ='some value';
        //act
        list.insert(value);
        list.append(value);
        //asert
        expect(list.includes(value).toEqual(true));
    })
    it('sould  include the value false', () => {
        //arang
        const list=new LL();
        const value ='some value';
        //act
        list.insert(value);
        list.append(value);
        //asert
        expect(list.includes(value).toEqual(false));
    })
    
    it('toStrinf()',()=>{
        let newList=new LinkedList;
        newList.insert(1);
        newList.append(2);
        expect(newList.toString()).toEqual('{1}-->{2}-->NULL');
    });
})