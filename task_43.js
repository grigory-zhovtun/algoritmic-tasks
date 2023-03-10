'use strict';

// Дан массив целых чисел. Необходимо создать новый массив такой же длины, 
// в котором каждый элемент равен произведению всех элементов исходного массива, 
// кроме этого элемента.

// Примеры:

// - Массив {12,20} -> новый массив {20,12}, так как 20 = 20 * 1, а 12 = 12 * 1
// - Массив {1,5,2} -> новый массив {10,2,5}, так как 10 = 5 * 2, 2 = 1 * 2, а 5 = 1 * 5
// - Массив {10,3,5,6,2} -> новый массив {180,600,360,300,900}, 
//     так как 180 = 3 * 5 * 6 * 2, 
//     600 = 10 * 5 * 6 * 2, 360 = 10 * 3 * 6 * 2, 
//     300 = 10 * 3 * 5 * 2, а 900 = 10 * 3 * 5 * 6

function productArray(numbers){
  //your code here
    let result = [];

    if (numbers.length <= 2 && Array.isArray(numbers)) {
        return numbers.reverse();
    }

    for (let i = 0; i < numbers.length; i++) {
        let tmp = [...numbers];
        tmp.splice(i, 1);
        const num = tmp.reduce((a, b) => a * b, 1);
        result.push(num);
    }
    return result;
}

console.log(productArray([3,27,4,2])) //[216,24,162,324]


// function productArray(numbers)
// {
//   var sum = numbers.reduce((x, y) => x * y);
//   return numbers.map(x => sum / x);
// }