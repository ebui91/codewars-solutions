/*
    LEVEL 7 KYU
    Source: https://www.codewars.com/kata/sum-of-a-sequence/train/javascript
    Date: 03/12/2018
*/

const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    var sum = 0;
    if(begin > end){
      return sum;
    }
    for(let i=begin; i<=end; i+=step){
      sum+=i;
    }
    return sum;
  };