'use strict'

const insertionSort = require('../insertionSort');
describe("Selection Sort", () => {
  it("should sort Array elements", () => {
    let array = [5, 4, 1, 2, 3];
    insertionSort(array);
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });
  it("should sort Array elements", () => {
    let array = [20, 18, 12, 8, 5, -2];
    insertionSort(array);
    expect(array).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it("should sort Array elements", () => {
    let array = [5, 12, 7, 5, 5, 7];
    insertionSort(array);
    expect(array).toEqual([5, 5, 5, 7, 7, 12]);
  });
  it("should sort Array elements", () => {
    let array = [2, 3, 5, 7, 13, 11];
    insertionSort(array);
    expect(array).toEqual([2, 3, 5, 7, 11, 13]);
  });
});