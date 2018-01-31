/**

**** THIS IS AN EXTREMELY POORLY WRITTEN KATA ****

Source: https://www.codewars.com/kata/creating-a-string-for-an-array-of-objects-from-a-set-of-words/train/javascript
Date: 01.30.2018

You're given a string. You have a sequence of words separated with whitespaces. Let's say it is a sequence of patterns: a name and a corresponding number - like this:

"red 1 yellow 2 black 3 white 4"

You want to turn it into a list of objects you plan to work with later on - like this:

"[{name : 'red', id : '1'}, {name : 'yellow', id : '2'}, {name : 'black', id : '3'}, {name : 'white', id : '4'}]"
**/

// The solution according to how I interpretted the problem... return a JSON object.
function wordsToObject(input) {
  const answer= [];
  input= input.split(" ");

  function obj(name, id){
    this.name= name;
    this.id= id;
  }

  for(let i=0; i<input.length; i+=2){
    let tempObj= new obj(input[i], input[i+1]);
    answer.push(tempObj);
  }
  return answer;
}

// The 'real' solution, which asks you to return string that LOOKS like an array of objects or JSON... stupid.
function wordsToObject(input) {
  return "["+input.replace(/(\S+) (\S+)/g,"{name : '$1', id : '$2'},").slice(0,-1)+"]"
}
