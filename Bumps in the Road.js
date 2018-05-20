/**
    LEVEL 7 KYU
    Source: https://www.codewars.com/kata/bumps-in-the-road/train/javascript
    Date: 05.20.2018
**/

const bump = x => {
    var count = 0;
    x.split("").map(curr => curr === "n" ? count++ : count);
    return count > 15 ? "Car Dead" : "Woohoo!";
}