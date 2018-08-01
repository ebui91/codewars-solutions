/*
  Source: https://www.codewars.com/kata/not-prime-numbers/train/javascript 
  Date: 08.01.2018
*/

const notPrimes = (a,b) => {
  let arr = [];
  for(let i=a; i<b; i++){
    if(!isPrime(i) && numContainsPrimes(i)){
      arr.push(i);
    }
  }
  return arr;
}

const isPrime = (num) => {
  for(let i=2; i<100; i++){
    if(num%i === 0 && num!= i){
      return false;
    }
  }
  return true;
}

const numContainsPrimes = (num) => {
  let str = '' + num;
  for(let i=0; i<str.length; i++){
    if(str[i] === '2' || str[i] === '3' || str[i] === '5' || str[i] === '7') {
      continue;
    }
    return false;
  }
  return true;
}
