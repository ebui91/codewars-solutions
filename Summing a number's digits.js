/**
LEVEL 7 KYU
Source: https://www.codewars.com/kata/summing-a-numbers-digits/train/javascript
Date: 02/08/2018
**/

function sumDigits(number) {
  var arr= number.toString().split('');
  var sum= 0;
  arr.map(num=> {
    isNaN(num) ? false : num >= 0 ? sum+=parseInt(num) : sum+=(parseInt(num)*-1);
  });
  return sum;
}
