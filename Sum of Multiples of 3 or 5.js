/*
    LEVEL 7 KYU
    Source: https://www.codewars.com/kata/sum-of-all-the-multiples-of-3-or-5/
    Date: 06.19.2018
*/

const findSum = (n) => {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        i % 3 === 0 || i % 5 === 0 ? sum += i : sum;
    }
    return sum;
}

// Bonus one-liner
const findSum = n => Array(n + 1).fill().map((a, i) => i).reduce((a, b) => (b % 3 == 0 || b % 5 == 0) ? a + b : a + 0);