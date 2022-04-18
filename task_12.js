'use strict';

function chunkArrayInGroups(arr, size) {
  let endInd = arr.length;
  let newArray = [];
  
  for (let i=0; i < endInd; i += size) {
    if (i+size >= endInd) {
      newArray.push(arr.slice(i));
      break;
    }
    newArray.push(arr.slice(i, i+size));
  }

  return newArray;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

/*Write a function that splits an array (first argument) 
into groups the length of size (second argument) and returns 
them as a two-dimensional array. */