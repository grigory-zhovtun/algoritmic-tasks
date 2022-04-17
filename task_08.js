'use strict';

function titleCase(str) {
    let arr = str.split(' ');
    const newArr = arr.map(word => {
        word = word[0].toUpperCase() + word.slice(1).toLowerCase();
        return word;
    });

    str = newArr.join(' ');
    return str;
}

titleCase("I'm a little tea pot");

/* Title Case a Sentence

Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting 
words like the and of.
 */