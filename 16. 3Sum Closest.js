/***
 * 16. 3Sum Closest
 * Author: TH
 * Date: 15/05/2016
 * https://leetcode.com/discuss/85999/12-lines-concise-and-easy-understand-c-solultion

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var n = nums.length;
    var numsSort = nums.sort(function(a,b) {return a-b});
    var ret = numsSort[0] + numsSort[1] + numsSort[2];
    var i=0, left=0, right=0;
    for(i=0; i<n-2; i++){
        left = i + 1;
        right = n - 1;
        while(left < right) {
            sum = numsSort[i]+numsSort[left]+numsSort[right];
            if(Math.abs(sum-target) < Math.abs(ret-target))
                ret = sum;
            if(sum<target)
                left++;
            else if(sum>target)
                right--;
            else 
                return sum;
        }
    }
    return ret;
        
};
