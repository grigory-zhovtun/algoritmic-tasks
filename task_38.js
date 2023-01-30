"use strict";

function nextSmaller(n) {
    let numString = n.toString();
    let numArray = numString.split('');
    let pivotIndex = -1;
    let smallDigitIndex = -1;
    let temp;

    // Finding the pivot index
    for (let i = numArray.length - 1; i > 0; i--) {
        if (numArray[i] < numArray[i - 1]) {
            pivotIndex = i - 1;
            break;
        }
    }

    // No smaller number that contains the same digits
    if (pivotIndex === -1) {
        return -1;
    }

    // Finding the small digit index
    for (let i = numArray.length - 1; i > pivotIndex; i--) {
        if (numArray[i] < numArray[pivotIndex]) {
            smallDigitIndex = i;
            break;
        }
    }

    // Swapping the pivot and the small digit
    temp = numArray[pivotIndex];
    numArray[pivotIndex] = numArray[smallDigitIndex];
    numArray[smallDigitIndex] = temp;

    // Reversing the numbers after the pivot index
    let reversedDigits = numArray.splice(pivotIndex + 1).reverse();
    numArray = numArray.concat(reversedDigits);

    // If the first digit is zero, return -1
    if (numArray[0] === '0') {
        return -1;
    }

    return parseInt(numArray.join(''));
}

console.log(nextSmaller(21));