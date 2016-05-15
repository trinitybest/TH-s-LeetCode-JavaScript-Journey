/***
 * 15. 3Sum
 * Author: TH
 * Date: 15/05/2016
 * https://leetcode.com/discuss/91014/share-my-c-solution-very-easy-to-understand

 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // result set
    if(nums.length<3)
        return [];
    var set = [];
    var n =nums.length;
    //when we sort numbers in JS, we need to provide a compare function
    var numsSort = nums.sort(function(a, b) {return (a-b) } );
    //console.log(numsSort);
    var i=0, left=0, right=0, target=0;
    for(i=0; i<n-2; i++){
        if(numsSort[i]>0)
            break;
        if(numsSort[i] === numsSort[i-1])
            continue;
        left = i+1;
        right = n-1;
        while(left < right){
            
            target = 0-numsSort[i];
            if((numsSort[left]+numsSort[right])===target){
                set.push(new Array(numsSort[i], numsSort[left], numsSort[right]));
                while(left<right && numsSort[left] == numsSort[left+1])
                    ++left;
                while(left<right && numsSort[right] == numsSort[right-1])
                    --right;
                ++left;
                --right;
            }
            else if ((numsSort[left]+numsSort[right]) < target){
                ++left;
            }
            else
                --right;
                
        }
    }
    return set;
    
};






