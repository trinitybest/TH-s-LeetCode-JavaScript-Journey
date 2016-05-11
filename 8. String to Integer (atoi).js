/***
 * About: 8. String to Integer (atoi)
 * Author: TH
 * Date: 11/05/2016
 * isLetter comes from http://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript
 ***/
 
 /**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
		
    var sign = '+';
    var number = 0;
    // if str is empty
    if(!str){
    	return number;
      }
    
    //remove white space in the begin and in the end. Remove non-number in the end.
    var userText = str.replace(/^\s+/,'').replace(/\s+$/,'').replace(/\D+$/g,'');
    //check if empty after removing white spaces and numbers
    if(userText === '')
    	return number;
    //save the sign if contains + or - as the first character
    else if(userText[0] === '+' || userText[0] === '-'){
    	sign = userText[0];
      userText = userText.substring(1,userText.length);
     
    }
    
    //remove substring starting from the first non-number charater from the remaining string.
    //we need to pay attention taht isNaN(' ') is false...as empty is treated as 0.
    for(var i=0; i<userText.length; i++){
    	if(isNaN(userText[i]) || userText[i] === ' '){ 
      	if(i!==0){
      		userText = userText.substring(0,i);
          break;
          }
        else if(i===0){
        	userText = '';
          break;
          }
        else 
        	console.log("Fatal Error.");
        
      }
    }
    //document.write(userText);
    if(userText){
    switch (sign){
    	case '+':
      	number=Number(userText);
        break;
      case '-':
      	number=-Number(userText);
        break;
      default:
      	console.log("Fatal Error.");
    }
    if(number>Math.pow(2,31)-1)
    	return Math.pow(2,31)-1;
    else if ( number<-Math.pow(2,31))
    	return -Math.pow(2,31);
    else
    	return number;
    }
    else
    	return number;
};
