/***
 * Author: TH
 * Date: 11/05/2016
 * Idea comes from https://leetcode.com/articles/longest-palindromic-substring/?error=[[error:content-too-short,%208]]#nodebb-comments
 * Approach #4
 ***/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var start=0; var end=0;
    for(var i=0; i<s.length; i++){
        var len1 = expandAroundCenter(s, i, i);
        var len2 = expandAroundCenter(s, i, i+1)
        var len = Math.max(len1, len2);
        if(len > end - start){
            start = i - Math.floor((len-1)/2);
            end = i + Math.floor(len/2);
        }
    }
    return s.substring(start,end+1);
};


var expandAroundCenter = function(s, left, right) {
    var l = left;
    var r = right;
    while(l>=0 && right < s.length && s[l] === s[r]){
        l--;
        r++;
    }
    return r-l-1;

}
