/*
    LEVEL 7 KYU
    Source: https://www.codewars.com/kata/form-the-minimum/train/javascript
    Date: 04.15.2018
*/

const minValue = (values) => {
    let sorted = values.sort();
    let lowestNums = [];
    
    for(let i=0; i<sorted.length; i++) {
      if(lowestNums.indexOf(sorted[i]) === -1) {
        lowestNums.push(sorted[i]);
      }
    }
    
    return Number(lowestNums.join(""));
}