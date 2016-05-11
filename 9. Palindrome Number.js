/***
 * 9. Palindrome Number
 * Author: TH
 * Date: 12/05/2016
 * If the number overflows or is negative, then return false.
 ***/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x>Math.pow(2,31)-1 || x<-Math.pow(2,31))
    	return false;
    if(x<0)
        return false;
	var number = Math.abs(x);
    number = number.toString();
    var start = 0; 
    var end = 0;
    for(var i=0; i<number.length; i++){
    	var len1 = expandAroundCenter(number, i, i);
      var len2 = expandAroundCenter(number, i, i+1);
      var len = Math.max(len1, len2);
      if(len === number.length)
      	return true;
    }
    return false;
};

var expandAroundCenter = function(s, left, right){
		var l = left;
    var r = right;
    while(l>=0 && r<s.length && s[l]===s[r]){
    	l--;
      r++;
    }
    return r-l-1;
};
