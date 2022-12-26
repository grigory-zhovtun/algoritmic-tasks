/*
Oh No!

The song sheets have been dropped in the snow and the lines of 
each verse have become all jumbled up.

Task
You have to write a comparator function which can sort the lines 
back into their correct order, otherwise Christmas will be cancelled!

Reminder: Below is what the final verse should look like

On the 12th day of Christmas my true love gave to me 
12 drummers drumming, 
11 pipers piping, 
10 lords a leaping, 
9 ladies dancing, 
8 maids a milking,
7 swans a swimming, 
6 geese a laying, 
5 golden rings, 
4 calling birds,
3 French hens, 
2 turtle doves and 
a partridge in a pear tree. 
*/
"use strict";

const comparator = (a, b) => {
    if (a[0] === "O") {
        a = a.slice(0, 7)
    } 
    if (b[0] === "O") {
        b = b.slice(0, 7)
    } 

    const sortedList = {
        "On the ": 1,
        "12 drummers drumming,": 2,
        "11 pipers piping,": 3,
        "10 lords a leaping,": 4,
        "9 ladies dancing,": 5,
        "8 maids a milking,": 6,
        "7 swans a swimming,": 7,
        "6 geese a laying,": 8,
        "5 golden rings,": 9,
        "4 calling birds,": 10,
        "3 French hens,": 11,
        "2 turtle doves and": 12,
        "a partridge in a pear tree.": 13,
    }

    return sortedList[a] - sortedList[b]
}
