/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i = 0;
    for(var j=1; j<nums.length; j++){
        if(nums[i] != nums[j]){
            nums[++i] = nums[j];
            
        }
    }
    return i+1;
};
