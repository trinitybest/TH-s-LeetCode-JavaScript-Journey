/***
 * 17. Letter Combinations of a Phone Number
 * Author: TH
 * Date: 15/05/2016
 * https://leetcode.com/discuss/96775/standard-backtracking-easy-understand-great-performance
 * This one uses the concept of iteration.

 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var rst = [];
    if(digits.length === 0) return rst;
    var dict = [];

    dict['2'] = 'abc';
    dict['3'] = 'def';
    dict['4'] = 'ghi';
    dict['5'] = 'jkl';
    dict['6'] = 'mno';
    dict['7'] = 'pqrs';
    dict['8'] = 'tuv';
    dict['9'] = 'wxyz';
    var buffer = [];
    BT(rst, digits, 0, buffer, dict);
    return rst;
    
};

var BT = function(rst, digits, index, buffer, dict){
    if(index === digits.length){
        
        rst.push(buffer.join(''));
        return ;
    }
    
    for (var i=0; i< dict[digits[index]].length; i++){
        buffer[index] = dict[digits[index]][i];
        BT(rst, digits, index + 1, buffer, dict);
    }
    
}














