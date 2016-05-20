/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next){
        return head;
    }
    var second = head.next;
    var third = second.next;
    
    second.next = head;
    head.next = swapPairs(third);
    
    return second;
};
