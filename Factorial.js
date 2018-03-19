/*
    LEVEL 7 KYU
    Source: https://www.codewars.com/kata/factorial/train/javascript
    Date: 3.19.2018
*/

const factorial = (n) => {
    if (n<0 || n>12)
      throw new RangeError('n must be between 1 and 11.');
    return n<=1 ? 1 : n*factorial(n-1);
}