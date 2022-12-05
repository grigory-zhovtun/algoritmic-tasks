function multiply(number){
    //your code here
    let tmpCount = 0;
    if (number < 0) {
        tmpCount = number * -1;
    } else {
        tmpCount = number;
    }
    let count = tmpCount.toString().length;

    return number * Math.pow(5, count);
  }

console.log(multiply(3)==15) // 3 * 5¹
console.log(multiply(10)==250) // 10 * 5²
console.log(multiply(200)==25000) // 200 * 5³
console.log(multiply(0)==0) // 0 * 5¹
console.log(multiply(-3)==-15) // -3 * 5¹


//   Jack really likes his number five: the trick here is that you have to multiply 
//   each number by 5 raised to the number of digits of each numbers, so, for example:
