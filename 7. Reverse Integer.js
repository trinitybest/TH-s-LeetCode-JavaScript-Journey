/***
 * Author: TH
 * Date: 11/05/2016
 * Idea comes from http://stackoverflow.com/questions/6351825/reverse-decimal-digits-in-javascript
 * Biggest 32-Int Number https://en.wikipedia.org/wiki/2147483647_(number)
 ***/
 
 /**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result=0;
    if(x>=0){
        var stringX = x.toString();
        var reverse = stringX.split("").reverse().join("");
        result = Number(reverse);
    }
    else if(x<0){
        var absX= Math.abs(x);
        var stringAbsX = absX.toString();
        var reverseAbsX = stringAbsX.split("").reverse().join("");
        result = -Number(reverseAbsX);
    }
    if(result>Math.pow(2,31)-1 || result < -Math.pow(2,31)){
        return 0;
    }
    else
        return result;
};


