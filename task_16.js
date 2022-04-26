'use strict';

function diffArray(arr1, arr2) {
    const newArr = [];
    const arr = [...arr1, ...arr2];

    const checkUniqElements = (el, a) => {
        let count = 0;
        a.forEach(item => {
            if (item == el) {
                count ++;
            }
        })
        return count;
    }

    for (let i = 0; i < arr.length; i++) {
        if (checkUniqElements(arr[i], arr) == 1) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));


/**
Compare two arrays and return a new array with any items only
found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
 */