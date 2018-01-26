/**
Source: https://www.codewars.com/kata/sub-array-division/javascript
Date: 01.26.2018

In this Kata, you will be given an array of numbers and a number n, and your task will be to determine if any array elements, when summed (or taken individually), are divisible by n.

For example:

solve([1,3,4,7,6],9) = True, because 3 + 6 is divisible by 9; solve([1,2,3,4,5],10) = True for similar reasons.
solve([8,5,3,9],7) = True), because 7 evenly divides 5 + 9, but solve([8,5,3],7) = False.
**/

function solve(arr, n) {
  var subset = [0];
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0, len = subset.length; j < len; j++) {
      if((subset[j]+arr[i]) % n == 0) return true;
      subset.push(subset[j]+arr[i]);
    }
  }
  return false;
};

solve([1,3,4,7,6],9);
solve([8,5,3,9],7)
