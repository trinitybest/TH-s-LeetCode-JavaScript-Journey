/**
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
var addTwoNumbers = function(l1, l2) {
    var p = l1;
    var q = l2;
    var dummyHead = new ListNode(0);
    var curr = dummyHead;
    var carry = 0;
    while(p !== null || q!== null){
        var x = (p!==null) ? p.val:0;
        var y = (q!==null) ? q.val:0;
        var temp = new ListNode((x+y+carry)%10);
        carry = (x+y+carry)/10
        curr.next = temp;
        curr = curr.next;
        if(p !== null) p = p.next;
        if(p !== null) q = q.next;
    }
    if(carry!==0){
        var temp2 = new ListNode(carry);
        curr.next = temp2;
    }
    return dummyHead.next;
};

