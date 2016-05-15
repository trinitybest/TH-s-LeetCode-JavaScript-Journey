/***
 * 22. Generate Parentheses 
 * Author: TH
 * Date: 15/05/2016
 * https://leetcode.com/discuss/99089/very-concise-java-solution-with-explanation
 *
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var res = [];
    helper(n, n, '', res);
    return res;
};

var helper = function(openLeft, closeLeft, acc, res){
    if(openLeft === 0 ){
        for(var i=0; i<closeLeft; i++){
            acc+=')';
        }
        res.push(acc);
        return;
    } else if (closeLeft > 0){
        helper(openLeft-1, closeLeft, acc+'(', res);
        if(openLeft<closeLeft){
            helper(openLeft, closeLeft-1, acc+')', res);
        }
    }
}

