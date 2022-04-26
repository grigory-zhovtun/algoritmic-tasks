'use strict';

function sumAll(arr) {
    let sum = 0;
    let [a, b] = arr.sort((a, b) => a - b);
    for (let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
  }
  
  console.log(sumAll([1, 4]));

  /**
  We'll pass you an array of two numbers. 
  Return the sum of those two numbers plus the sum of all 
  the numbers between them. 
  The lowest number will not always come first.
  */