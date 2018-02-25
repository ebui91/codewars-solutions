/**
LEVEL 6 KYU
Source: https://www.codewars.com/kata/create-phone-number/train/javascript
Date: 02.25.2018
**/

function createPhoneNumber(numbers){
  const first= numbers.slice(0,3).join('');
  const second= numbers.slice(3,6).join('');
  const third= numbers.slice(6,10).join('');
  return `(${first}) ${second}-${third}`;
}
