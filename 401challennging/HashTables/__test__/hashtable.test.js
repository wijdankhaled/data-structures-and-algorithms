'use strict'

const HashTable = require("../hashTable");

describe('Hash table', () => {
  it(" Adding a key/value to your hashtable results in the value being in the data structure", () => {
    let hashtable = new HashTable(6);
    let expected = "wijdan";
    hashtable.add("name", "wijdan");

    expect(hashtable.contain("name")).toBe(true);
    expect(hashtable.get("name")).toEqual(expected);
  });


  it(" \Retrieving based on a key returns the value stored", () => {
    let hashtable = new HashTable(6);
    let expected = "wijdan";
    hashtable.add("name", "wijdan");

    expect(hashtable.contain("name")).toBe(true);
    expect(hashtable.get("name")).toEqual(expected);
    expect(hashtable.get("hello")).toEqual("Dose not exist");
  });



  it("it handle a collision within the hashtable", () => {
    let hashtable = new HashTable(6);
    hashtable.add("name", "wijdan1");
    hashtable.add("mean", "wijdan2");

    let operation = hashtable.map[hashtable.hash("name")].head.next.val["mean"];
    expect(hashtable.contain("wijdan1")).toBe(true);
    expect(operation).toEqual("wijdan2");
  });


   
  it('Successfully  retrieve a value from a bucket within the hashtable that has a collision',()=>{
    let hashtable = new HashTable(6);
    hashtable.add("name", "wijdan1");
    hashtable.add("mean", "wijdan2");

    let operation = hashtable.map[hashtable.hash("name")].head.next.val["mean"];
    expect(hashtable.get("mean")).toBe('wijdan2');
    expect(operation).toEqual("wijdan2");
  });



  it('Successfully hash a key to an in-range value',()=>{
    let hashtable = new HashTable(5);
    let min=0;
    let max=4;
    let key='ibrahem';
    expect(hashtable.hash(key)).toBeGreaterThanOrEqual(min);
    expect(hashtable.hash(key)).toBeLessThanOrEqual(max);
  })
});