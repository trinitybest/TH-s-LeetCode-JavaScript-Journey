/**
 * 23. Merge k Sorted Lists 
 * Author: TH
 * Date: 20/05/2016
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var ret = null;
    for(var i=0; i<lists.length; i++){
        ret = mergeTwoLists(ret, lists[i])
    }
    return ret;
};

var mergeTwoLists = function(l1, l2){
    var result = null;
    if(!l1) return l2;
    if(!l2) return l1;
    if(l1.val<=l2.val){
        result = l1;
        result.next = mergeTwoLists(l1.next, l2);
    } else {
        result = l2;
        result.next = mergeTwoLists(l1, l2.next);
    }
    return result;
}
