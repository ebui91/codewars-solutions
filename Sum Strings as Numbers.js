/**
Source: https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
Date: 01.24.2018

Given the string representations of two integers, return the string representation of the sum of those integers.

For example: sumStrings('1','2') => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
**/

function sumStrings(num1, num2){
  while(num1.length > 1 && num1[0] === '0')
    num1= num1.slice(1);

  while(num2.length > 1 && num2[0] === '0')
    num2= num2.slice(1);

  num1= num1.split('').reverse().join('');
  num2= num2.split('').reverse().join('');

  var add= 0
  var ans = '';

  for(var i=0, len=num1.length > num2.length ? num1.length : num2.length; i < len; i++) {
    var a = i < num1.length ? Number(num1[i]) : 0
      , b = i < num2.length ? Number(num2[i]) : 0;

    var c= a + b + add;
    ans+= c % 10;
    add= c >= 10 ? 1 : 0;
  }

  if(add) ans += add;

  return ans.split('').reverse().join('');
}
