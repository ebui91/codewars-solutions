/*
    LEVEL 7 KYU
    Source: https://www.codewars.com/kata/58880c6e79a0a3e459000004
    Date: 12.19.2020
*/

const houseNumbersSum = (inputArray) => inputArray
  .slice(0, inputArray.indexOf(0))
  .reduce((tot, acc) => tot+=acc, 0)