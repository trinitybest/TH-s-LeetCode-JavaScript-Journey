/***
 * Author: TH
 * Date: 10/05/2016
 * Idea comes from http://www.programcreek.com/2012/12/leetcode-median-of-two-sorted-arrays-java/
 ***/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// findMedianSortedArrays
var findMedianSortedArrays = function(nums1, nums2) {
   var m = nums1.length;
   var n = nums2.length;
   var half = Math.floor((m+n)/2);
   if((m+n)%2!==0) //odd
        return findKth(nums1, nums2, half, 0, m - 1, 0, n - 1);
    else { //even
        return (findKth(nums1, nums2, half, 0, m - 1, 0, n - 1) + findKth(nums1, nums2, half - 1, 0, m - 1, 0, n - 1)) * 0.5
    }

};
//findKth
var findKth = function(A, B, k, aStart, aEnd, bStart, bEnd){
    var aLen = aEnd - aStart + 1;
    var bLen = bEnd - bStart + 1;
    
    //handle special issues
    if(aLen === 0)
        return B[bStart + k];
    if(bLen === 0)
        return A[aStart + k];
    if(k===0)
        return A[aStart] < B[bStart] ? A[aStart] : B[bStart];
    var aMid = Math.floor(aLen * k / (aLen + bLen));
    var bMid = k - aMid - 1;

    // make aMid and bMid to be array index
    aMid += aStart;
    bMid += bStart;

    if (A[aMid] > B[bMid]){
        k = k - (bMid - bStart + 1);
        aEnd = aMid;
        bStart = bMid + 1;
    } else {
        k = k - (aMid - aStart + 1);
        bEnd = bMid;
        aStart = aMid + 1;
    }
    return findKth(A, B, k, aStart, aEnd, bStart, bEnd);

}

 

