/**
LEVEL 7 KYU
Source: https://www.codewars.com/kata/5d62961d18198b000e2f22b3/train/javascript
Date: 12.19.2019
**/

const generateNumber = (squad, n) => {
  if(squad.indexOf(n) < 0) return n;
  if(n > 18 || n < 0) return null
  for(let i=9; i>1; i--) {
    let test;
    let num = n-i;
    test = "" + num + i;
    if(squad.indexOf(Number(test)) < 0) return Number(test);
  }
  return null;
}