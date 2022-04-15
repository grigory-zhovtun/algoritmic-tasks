'use strict';

// reverse string

function reverseString(str) {
    let tempArr = str.split('');
    for (let i=0; i < str.length / 2; i ++) {
      [tempArr[i], tempArr[tempArr.length-i-1]] = [tempArr[tempArr.length-i-1], tempArr[i]];
    }

    return tempArr.join('');
}
  
console.log(reverseString("hello"));