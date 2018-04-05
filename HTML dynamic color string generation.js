/*
    LEVEL 6 KYU
    Source: https://www.codewars.com/kata/html-dynamic-color-string-generation/train/javascript
    Date: 04.05.2018
*/

const generateColor = () => {
    // show em the code!
    let characters = "ABCDEF123456789";
    let color = "#";
    
    for(let i=0; i<6; i++) {
      color = color.concat(characters[(Math.floor(Math.random() * characters.length))]);
    }
    return color;
};