'use strict'
let arr = [2, 4, 6, -8];
function insertshiftarray(arr, number) {
    let newarr = [];
    let center = Math.round(arr.length / 2);
    arr.forEach((element, index) => {
        if (index !== center) {
            newarr.push(element);
        } else {
            newarr.push(num);
            newarr.push(element);
        }

    });
    return newarr;
}

// test

describe('Testing challenge array-insert-shift', () => {
    it('It should returns an array with added number ', () => {
        expect(insertShiftArray([2, 4, 6, -8], 5)).toStrictEqual([2, 4, 5, 6, -8]);
        expect(insertShiftArray([42, 8, 15, 23, 42], 16)).toStrictEqual([42, 8, 15, 16, 23, 42]);
    });
});

