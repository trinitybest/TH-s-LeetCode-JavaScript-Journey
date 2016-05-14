/***
 * 14. Longest Common Prefix
 * Author: TH
 * Date: 14/05/2016
 * https://leetcode.com/articles/longest-common-prefix/

 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0)
        return '';
    var commonPrefix = strs[0];
    
    for(var i=1; i<strs.length; i++){
        while(strs[i].indexOf(commonPrefix)!==0)
            commonPrefix = commonPrefix.substring(0,commonPrefix.length-1);
            if(commonPrefix.length === 0)
                return '';
    }
    return commonPrefix;
    
};
