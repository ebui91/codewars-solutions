/**
LEVEL 5 KYU
Source: https://www.codewars.com/kata/57feb00f08d102352400026e/train/javascript
Date: 02.4.2018
**/

let flapDisplay= (lines, rotors)=> {
  return lines.map((line, indexLine)=> {
    let rotation= 0;

    return line.split('').map((letter, indexLetter) => {
      rotation+= rotors[indexLine][indexLetter];
      let letterIndex= ALPHABET.indexOf(letter);
      let rotatedIndex= (letterIndex + rotation) % ALPHABET.length;
      return ALPHABET[rotatedIndex];
    }).join('');
  });
}
