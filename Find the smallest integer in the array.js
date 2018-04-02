/*
    LEVEL 7 KYU
    Source: https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
    Date: 04.02.2018
*/


class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a, b) => a-b)[0];
    }
}