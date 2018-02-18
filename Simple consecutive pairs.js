/**
LEVEL 7 KYU
Source: https://www.codewars.com/kata/simple-consecutive-pairs/train/javascript
Date: 02.18.2018
**/

function pairs(ar){
  let count= 0;
  for(let i=0;i<ar.length;i+=2){
    if(ar[i]-ar[i+1]=== 1 || ar[i]-ar[i+1]=== -1 ){
      count++;
    }
  }
  return count;
};
