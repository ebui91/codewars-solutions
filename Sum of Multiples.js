/*
    LEVEL 8 KYU
    SOURCE: https://www.codewars.com/kata/sum-of-multiples/train/javascript
    DATE: 3/17/2018
*/

const sumMul = (n,m) => {
      var sum = 0;
      if(n>=m){
        return "INVALID";
      }
      
      for(let i = n; i < m; i+=n){
        sum+=i;
      }
      return sum;
}