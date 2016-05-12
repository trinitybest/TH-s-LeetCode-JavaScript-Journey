/***
 * 12. Integer to Roman  
 * Author: TH
 * Date: 12/05/2016
 * This elegant idea comes from https://leetcode.com/discuss/91819/simple-java-solution
 ***/
 
 /**
 * @param {number} num
 * @return {string}
 Math.floor()
 */
var intToRoman = function(num) {
    var M = ['', 'M', 'MM', 'MMM'];
    var C = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    var X = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    var I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    return ( M[Math.floor(num/1000)] + C[Math.floor((num%1000)/100)] + X[Math.floor((num%100)/10)] +I[Math.floor(num%10)] );
};
