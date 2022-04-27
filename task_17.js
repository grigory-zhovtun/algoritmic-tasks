'use strict';

function solution(input, markers) {
    let result = "";
    const text = input.split('\n');
    text.forEach(str => {
        const marker = markers.filter(marker => str.indexOf(marker) !== -1).join();
        if (!marker) {
            result += str.trim() + "\n";
        } else {
            str = str.slice(0, str.indexOf(marker)).trim();
            result += str + "\n";
        }   
    })
    return result.slice(0, -1);
};


const result = solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])

/**
 * Complete the solution so that it strips all text 
 * that follows any of a set of comment markers passed in. 
 * Any whitespace at the end of the line should also be stripped out. 
 * 
 * 
 */