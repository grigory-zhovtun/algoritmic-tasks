'use strict';

function fearNotLetter(str) {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const start = alphabet.indexOf(str[0]);
    const end = alphabet.indexOf(str[str.length - 1]);
    const sliceFromAlphabet = alphabet.slice(start, end+1);
    
    for (let i = 0; i < str.length; i++) {
        if (sliceFromAlphabet[i] !== str[i]) {
            return sliceFromAlphabet[i];
        } 
    }
    return undefined;
  }
  console.log(fearNotLetter("abce"));
  



/**

 * Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

 */