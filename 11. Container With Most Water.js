/***
 * 11. Container With Most Water 
 * Author: TH
 * Date: 12/05/2016
 * idea from http://www.programcreek.com/2014/03/leetcode-container-with-most-water-java/
 * This is the easiest Medium difficulty one ever.
 ***/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
		if(height === null || height.length<2)
    	return 0;
		//set initial left and right values
    var left = 0;
    var right = height.length-1;
    var max = 0;
    while(left < right){
    	max = Math.max(max,(right-left)*Math.min(height[left],height[right]));
      if(height[left]<height[right])
      	left++;
      else 
      	right--;
    }
    return max;
};
