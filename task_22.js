'use strict';


const plus = (num) => ['+', num];
const minus = (num) => ['-', num];
const times = (num) => ['*', num];
const dividedBy = (num) => ['/', num];

const operations = (op, firstNum, secondNum) => {
    switch (op) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return Math.floor(firstNum / secondNum) ;
    }
};

const one = (op) => {
    if (!op) {
        return 1;
    } else {
        return operations(op[0], 1, op[1]);
    }
};

const two = (op) => {
    if (!op) {
        return 2;
    } else {
        return operations(op[0], 2, op[1]);
    }
};

const three = (op) => {
    if (!op) {
        return 3;
    } else {
        return operations(op[0], 3, op[1]);
    }
};

const four = (op) => {
    if (!op) {
        return 4;
    } else {
        return operations(op[0], 4, op[1]);
    }
};

const five = (op) => {
    if (!op) {
        return 5;
    } else {
        return operations(op[0], 5, op[1]);
    }
};

const six = (op) => {
    if (!op) {
        return 6;
    } else {
        return operations(op[0], 6, op[1]);
    }
};

const seven = (op) => {
    if (!op) {
        return 7;
    } else {
        return operations(op[0], 7, op[1]);
    }
};

const eight = (op) => {
    if (!op) {
        return 8;
    } else {
        return operations(op[0], 8, op[1]);
    }
};

const nine = (op) => {
    if (!op) {
        return 9;
    } else {
        return operations(op[0], 9, op[1]);
    }
};

const zero = (op) => {
    if (!op) {
        return 0;
    } else {
        return operations(op[0], 0, op[1]);
    }
};

console.log(eight(dividedBy(three())));




/*
This time we want to write calculations using functions and get the results. 
Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical 
    operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner 
    function represents the right operand
    Division should be integer division. For example, this should return 2, 
    not 2.666666...:

eight(dividedBy(three()));

*/