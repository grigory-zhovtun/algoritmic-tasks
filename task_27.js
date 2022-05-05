function sumFibs(num) {
    let fibs = [1, 1];
    let i = 0;
    let fib;

    while (num > i) {
        fib = fibs[i] + fibs[i + 1];
        if (fib <= num) fibs.push(fib);
        i++;
    }

    return fibs.filter(n => n % 2 !== 0).reduce((a, b) => a + b);
}

console.log(sumFibs(75024));

/*
Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci 
numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two 
previous numbers. The first six numbers of the Fibonacci 
sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd 
Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

*/