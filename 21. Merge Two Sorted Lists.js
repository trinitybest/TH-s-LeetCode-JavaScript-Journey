/***
 * 21. Merge Two Sorted Lists 
 * Author: TH
 * Date: 15/05/2016
 * https://leetcode.com/discuss/92810/clean-recursive-python-solution
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var result = null;
    if(!l1) return l2;
    if(!l2) return l1;
    if(l1.val<l2.val){
        result = l1;
        result.next = mergeTwoLists(l1.next,l2);
    } else {
        result = l2;
        result.next = mergeTwoLists(l1,l2.next);
    }
    return result;
        
};

