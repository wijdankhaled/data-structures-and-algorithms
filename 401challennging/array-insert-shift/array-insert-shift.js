'use strict'
let arr = [5, 8, 3, 7, 6];
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
