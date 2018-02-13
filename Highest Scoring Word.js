/**
LEVEL 6 KYU
Source: https://www.codewars.com/kata/highest-scoring-word/train/javascript
Date: 02.13.2018
**/

function high(x){
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  const words = x.split(' ')
  const scores = words.map(x => [...x].map(y => alpha.indexOf(y) + 1)).map(x => x.reduce((a,b) => a + b,0))

  return words[scores.indexOf(Math.max(...scores))]
}
