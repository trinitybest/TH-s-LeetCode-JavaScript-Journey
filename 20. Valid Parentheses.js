/***
 * 20. Valid Parentheses
 * Author: TH
 * Date: 15/05/2016
 * https://leetcode.com/discuss/95114/0ms-java-solution-beats-98-57%25
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s) return true;
    
    var stack = [];
    var top = 0; //index of the stack
    var topStack;
    for(var i=0; i< s.length; i++)
    {   
        var c = s[i];
        if(c==='(' || c=== '[' || c==='{'){
            stack[top++] = c;
        }else if (c===')' || c=== ']' || c==='}'){
            topStack = stack[--top];
            if((topStack==='(' && c===')') || (topStack==='[' && c===']') || (topStack==='{' && c==='}'))
                continue;
            else 
                return false;
        }else
            return false;
    }
    if(top===0)
        return true;
    else
        return false;
};





