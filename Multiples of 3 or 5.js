/*
    LEVEL 6 KYU
    Source: https://www.codewars.com/kata/multiples-of-3-or-5/train/javascript
    Date: 03.25.2018
*/

const solution = (num) => {
    var arr = [];
    
    for(let i=1; i<num; i++){
      if(i%3 === 0 || i%5===0){
        arr.push(i);
      }
    }
    return arr.reduce((acc, curr) => acc += curr, 0)
}