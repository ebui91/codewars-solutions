/*
    LEVEL 6 KYU
    Source: https://www.codewars.com/kata/string-transformer/train/javascript 
    Date: 04.13.2018
*/

const stringTransformer = (str) => {
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    return str
      .split('')
      .map(letter => lowercase.indexOf(letter) === -1 ? letter.toLowerCase() : letter.toUpperCase())
      .join('')
      .split(' ')
      .reverse()
      .join(' ');  
}