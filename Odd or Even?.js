/*
    LEVEL 7 KYU
    Source: https://www.codewars.com/kata/odd-or-even/train/javascript
    Date: 04.19.2018
*/

const oddOrEven = (array) => {
    if(array.length>0) {
      return array.reduce((acc, curr) => acc += curr) % 2 === 0 ? 'even' : 'odd';
    }
    return 'even';
}