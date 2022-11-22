"use strict";

function nextNumb(val) {
    let nextNumber;
    if (val >= 9999999999) {
        return "There is no possible number that fulfills those requirements";
    }
    for (let i = val; i < 9999999999; i++) {
        nextNumber = i + 1;
        if(nextNumber % 3 == 0 && nextNumber % 2 != 0) {
            const str = nextNumber + '';
            const arr = str.split('');
            const duplicates = arr.filter((number, index, numbers) => {
                return numbers.indexOf(number) !== index;
                });
            if(duplicates.length > 0) {
                continue
            }
            return nextNumber;
        }
    }
}

console.log(nextNumb(9999999999))

// Make a function that receives a value, val and outputs the smallest higher number
// than the given value, and this number belong to a set of positive integers that
// have the following properties:

// their digits occur only once

// they are odd

// they are multiple of three

// nextNumb(12) == 15

// nextNumb(13) == 15

// nextNumb(99) == 105

// nextNumb(999999) == 1023459

// nextNumber(9999999999) == "There is no possible number that
// fulfills those requirements"
