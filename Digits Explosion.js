/*
    LEVEL 7 KYU
    Source: https://www.codewars.com/kata/digits-explosion/train/javascript
    Date: 03.27.2018
*/

const codewars = (str) => {
    var answer = "";
    arr = str.split("");
    arr.map(curr => {
      for(let i=0;i<curr;i++){
        answer+=curr; 
      }
    });
    return answer;
}