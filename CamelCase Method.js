/* 
    LEVEL 6 KYU
    Source: https://www.codewars.com/kata/camelcase-method/train/javascript
    Date: 04.22.2018
*/


// Some dirty codes :P
String.prototype.camelCase=function(){
    let str = this.split("");
    
    for(let i=0;i<str.length;i++) {
      if(str[0] === "") {
        return "";
      }else {
        str[0] = str[0].toUpperCase();
      }
      
      if(str[str.length-1] === " ") {
        str.splice(str.length-1,1);
      }
      
      if(str[i] === " ") {
        str.splice(i,1);
        str[i] = str[i].toUpperCase();
      }
    }
    return str.join("");
}