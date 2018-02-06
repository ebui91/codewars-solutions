/**
LEVEL 7 KYU
Source: https://www.codewars.com/kata/recycle/train/javascript
Date: 02.05.2018
**/

function recycleMe(recycle){
  var plastics= 0;
  var glass= 0;
  var card= 0;
  var answer= [];

  recycle.forEach(trash=> {
    trash > 0 ? plastics++
    : trash < 0 ? glass++
    : card++
  });
  answer.push(plastics, glass, card);
  return answer;
}
