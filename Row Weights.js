/*
    LEVEL 7 KYU
    Source: https://www.codewars.com/kata/row-weights/train/javascript
    Date: 05/21/2018
*/

const rowWeights = (array) => {
    var t1 = 0, t2 = 0;
    array.map((curr, i) => i % 2 === 0 ? t1 += curr : t2 += curr);
    return [t1, t2];
}