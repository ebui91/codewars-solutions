/*
    LEVEL 7 KYU
    Source: https://www.codewars.com/kata/get-the-middle-character/train/javascript
    Date: 04.18.2018
*/

const getMiddle = (s) => s.substr(Math.floor(s.length/2-1), s.length % 2 === 0 ? 2 : 1);