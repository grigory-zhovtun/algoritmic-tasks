'use strict';

function solution(list){
    let result = "";
    let currentNum = list[0];
    for (let i = 0; i < list.length; i++) {
        let j;
        if ((list[i+1] - currentNum) != 1 && currentNum === list[i]) {
            j = i;
            let count = 0;
            while (list[j] - list[j-1] === 1) {
                j--;
                count ++;
            }
            if (count > 1) {
                result += list[j] + "-" + currentNum + ",";
            } else if (count === 1) {
                result += list[j] + "," + currentNum + ","
            } else {
                result += currentNum + ",";
            }
            
        }

        currentNum = list[i+1];       
    }
    const resultStr = result.substring(0, result.length - 1);
    return resultStr;
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

// A format for expressing an ordered list of integers is to use a 
// comma separated list of either individual integers or a range of 
// integers denoted by the starting integer separated from the end 
// integer in the range by a dash, '-'. The range includes all integers 
// in the interval including both endpoints. It is not considered a 
// range unless it spans at least 3 numbers. For example "12,13,15-17"

// Complete the solution so that it takes a list of integers in increasing 
// order and returns a correctly formatted string in the range format.
