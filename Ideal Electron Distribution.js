/*
  Date: 08/13/2018
  Source: https://www.codewars.com/kata/ideal-electron-distribution/train/javascript
*/

const atomicNumber = (num) => {
  let arr = [];
  for (let shell = 1; num > 0; shell++) {
    let shellCap = 2 * Math.pow(shell, 2);
    (shellCap <= num) ? arr.push(shellCap) : arr.push(num);
    num = (shellCap <= num) ? num - shellCap : 0;
  }
  return arr;
}