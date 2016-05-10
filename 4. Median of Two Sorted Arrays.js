/***
 * Author: TH
 * Date: 10/05/2016
 * Idea comes from http://www.programcreek.com/2012/12/leetcode-median-of-two-sorted-arrays-java/
 ***/
 /***
  * First Attempt
  * var findMedianSortedArrays = function(nums1, nums2) {
    var length1 = nums1.length;
    var length2 = nums2.length;
    if(length1 ===0){
        return findMedian(nums2);
    }
    if(length2 ===0){
        return findMedian(nums1);
    }
};

var findMedian = function(array){
    var arrayLength = array.length;
    var result = 0;
    if(arrayLength%2 === 0){
        result = (array[arrayLength/2-1] + array[arrayLength/2])/2;
    } else {
        result = array[(arrayLength+1)/2-1];
    }
    return result;
}
***/

 

