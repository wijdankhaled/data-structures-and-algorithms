'use strict'

const HashmapTable = require("../hashmap-left-join");

describe("hashmaptable left join test", () => {

  let leftTable;
  let rightTable;


  beforeAll(() => {
  
    leftTable = new HashmapTable(5);
    leftTable.add("fond", "enamored");
    leftTable.add("warth", "anger");
    leftTable.add("diligent", "employed");
    leftTable.add("outfit", "garb");
   

  
    rightTable = new HashmapTable(5);
    rightTable.add("fond", "averse");
    rightTable.add("warth", "delight");
    rightTable.add("diligent", "idle");
    rightTable.add("guide", "follow");
   
  });

  
  it("It Should return all value of leftTable and the matches value from rightTable", () => {
    let expectedResults = [
      ["warth", "anger", "delight"],
      ["diligent", "employed", "idle"],
      ["outfit", "garb", "NULL"],
      ["fond", "enamored", "averse"]
     
    ];
    let hashTable = new HashmapTable(5);

    expect(hashTable.leftJoin(leftTable, rightTable)).toEqual(
      expectedResults
    );
  });

});