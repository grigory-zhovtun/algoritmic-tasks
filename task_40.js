"use strict";

// Given a string, return the minimal number of parenthesis reversals needed
// to make balanced parenthesis.

// For example:

// solve(")(") = 2 Because we need to reverse ")" to "(" and "(" to ")".
// These are 2 reversals.
// solve("(((())") = 1 We need to reverse just one "(" parenthesis to make it balanced.
// solve("(((") = -1 Not possible to form balanced parenthesis. Return -1.
// Parenthesis will be either "(" or ")".

// More examples in the test cases.

// Good luck.

function solve(s) {
    let count = 0;
    let balance = 0;

    if (s.length % 2 !== 0) {
        return -1;
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            balance++;
        } else {
            balance--;
            if (balance < 0) {
                count++;
                balance = 1;
            }
        }
    }

    if (balance < 0) {
        count += balance * -2;
        balance = 0;
    }

    return Math.ceil(count / 2 + balance / 2);
}

console.log(solve("())()))))()()("))