// two sum
'use strict';

const twoSums = (arr, count) => {
    let pairs = []
    let hashtable = []

    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i]
        const counterPart = count - currentNum
        if (hashtable.includes(counterPart)) {
            pairs.push([currentNum, counterPart])
        }
        hashtable.push(currentNum)
    }

    return pairs
}

console.log(twoSums([40, 11, 19, 17, -12], 28))