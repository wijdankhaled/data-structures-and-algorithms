let numbers3 = [5, 8, 3,7];

const binarySearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

//test
describe('Testing challenge 1', () => {
    it('It returns an index to item  ', () => {
        expect(binarySearch([5, 8, 3,7],8)).toStrictEqual(1);
        expect(binarySearch([5, 8, 3,7],4)).toStrictEqual(-1);
    });
});