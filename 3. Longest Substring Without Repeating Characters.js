/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //create an empty object
    var set = {};
    var n = s.length;
    var i=0, j=0;
    //answer
    var ans = 0;
    //console.log(s);
    while(i<n && j<n){
        if ( !(s[j] in set)){
            set[s[j++]] = true;
            ans = Math.max(ans, j-i);
        } else {
            delete set[s[i++]];
        }
    }
    return ans;
};
