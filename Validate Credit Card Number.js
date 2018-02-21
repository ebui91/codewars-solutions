/** 
LEVEL 6 KYU
Source: https://www.codewars.com/kata/validate-credit-card-number/train/javascript
Date: 02.21.2018
**/

// My Solution
function validate(n){
    var arr= [];
    var sum= 0;
    
    n.toString().split('').map((num)=> {
      arr.push(parseInt(num));
    })
    
    if(arr.length % 2 === 0){
      for(let i=0;i<arr.length;i+=2){
        if(arr[i]*2 > 10){
          arr[i]= (arr[i]*2)-9;
        }else{
          arr[i]*=2;
        }
      }
    }else{
      for(let i=1;i<arr.length;i+=2){
        if(arr[i]*2 > 10){
          arr[i]= (arr[i]*2);
        }else{
          arr[i]*=2;
        }
      } 
    }
    
    sum= arr.reduce((acc, curr)=> {
      return acc+=curr;
    });
    
    if(sum % 10 === 0){
      return true;
    }else{
      return false;
    }
  }


// My Unit Tests
Test.assert_equals(validate(79927398713), true)
Test.assert_equals(validate(79927398710), false)
Test.assert_equals(validate(79927398711), false)
Test.assert_equals(validate(79927398712), false)
Test.assert_equals(validate(79927398714), false)
Test.assert_equals(validate(2543), true)
Test.assert_equals(validate(2741), true)
Test.assert_equals(validate(2841), false)