/***
 * 19. Remove Nth Node From End of List
 * Author: TH
 * Date: 15/05/2016
 ***/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var count =0;
    var count2 = 0;
    var node = head;
    var dummy = new ListNode(0);
    dummy.next = node;
    
    while(node !== null)
    {
        count++;
        node = node.next;
    }
    
    node = dummy;
    count2 = count - n;
    console.log(count2);
    while(count2>0)
    {
        count2--;
        node = node.next;
    }
    node.next = node.next.next;
    return dummy.next;
    
};
