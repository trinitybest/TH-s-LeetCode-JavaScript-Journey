
/***
 * 18. 4Sum
 * Author: TH
 * Date: 15/05/2016

 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var set = [];
    var n = nums.length;
    if(n<4)
        return [];
    var numsSort = nums.sort(function(a,b) {return a-b});
    //console.log(numsSort);
    var i=0, j=0, left=0, right=0;
    for(i=0; i<n-3 && numsSort[i]+numsSort[i+1]+numsSort[i+2]+numsSort[i+3]<=target; i++){
        if(i!==0 && numsSort[i] === numsSort[i-1]) continue; //ignore duplicate values
        if(numsSort[i]+numsSort[n-3]+numsSort[n-2]+numsSort[n-1]<target) continue; //naive check
        innerTarget = target - numsSort[i]; //set target for inner loop
        for(j=i+1; j<n-2 && numsSort[j]+numsSort[j+1]+numsSort[j+2]<=innerTarget; j++){
            if(j!==i+1 && numsSort[j] === numsSort[j-1]) continue;
            if(numsSort[j]+numsSort[n-2]+numsSort[n-1]<innerTarget) continue;
            left = j+1;
            right = n-1;
            while(left<right){
                if(numsSort[j]+numsSort[left]+numsSort[right] === innerTarget){ //when condition is met
                    set.push([numsSort[i],numsSort[j],numsSort[left],numsSort[right]]);
                    while(numsSort[left] === numsSort[left+1]) //ignore duplicate values
                        left++;
                    while(numsSort[right] === numsSort[right-1]) //ignore duplicate values
                        right--;
                    left++;
                    right--;
                }
                else if (numsSort[j]+numsSort[left]+numsSort[right] < innerTarget)
                    left++
                else
                    right--;
            }
        }
    }
    return set;
};
