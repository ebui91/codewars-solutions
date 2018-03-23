/*
    LEVEL 7 KYU
    Source: https://www.codewars.com/kata/find-the-stray-number/train/javascript
    Date: 03.23.2018
*/

const stray = (arr) => {
    arr = arr.sort();
    return arr[0] === arr[1] ? arr[arr.length-1] : arr[0];
};