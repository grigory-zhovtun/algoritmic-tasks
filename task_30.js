'use strict';

function pigIt(str) {
    return str
    .split(' ')
    .map((word) => word.match(/[a-z]/i) ? word.slice(1) + word.charAt(0) + 'ay' : word)
    .join(' ')
}

console.log(pigIt('Hello, world !'));

/**
 * Move the first letter of each word to the end of it, 
 * then add "ay" to the end of the word. 
 * Leave punctuation marks untouched.
 */