/***
 * 13. Roman to Integer   
 * Author: TH
 * Date: 13/05/2016
 * https://leetcode.com/discuss/95101/o-n-c-solution-share
 ***/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var result = [];
    var max = 0;
    for(var i = 0; i<s.length; i++){
        switch(s[i]){
            case 'I':
                result.push(1);
                break;
            case 'V':
                result.push(5);
                break;
            case 'X':
                result.push(10);
                break;
            case 'L':
                result.push(50);
                break;
            case 'C':
                result.push(100);
                break;
            case 'D':
                result.push(500);
                break;
            case 'M':
                result.push(1000);
                break;
            default:
                console.log('Fatal Error.');
        }
    }
    result.push(0);
    for(var j = 0; j<s.length; j++){
        max += (result[j]>=result[j+1]? result[j] : (-1*result[j]))
    }
    return max;
    
};
