'use strict';

function solution(string) {
    
    const pos = [];

    for (let i=0; i < string.length; i ++) {
        if (/[A-Z]/.test(string[i])) {
            pos.push(' ');
        }
        pos.push(string[i]);
    }   

    return pos.join('');
}

console.log(solution("camelCasing"));

/*
Complete the solution so that the function will 
break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""


*/