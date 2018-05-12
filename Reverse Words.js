/*
    LEVEL 7 KYU
    Source: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/solutions/javascript
    Date: 05.12.2018
*/

const reverseWords = (str) => str.split(" ").map(word => word.split("").reverse().join("")).join(" ");