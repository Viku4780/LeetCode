/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head;
    const dummy = new ListNode(0);
    dummy.next = head;
    let rNode = dummy;

    for(let i=1;i<=n;i++){
        fast = fast.next;
    }

    while(fast){
        rNode = rNode.next;
        fast = fast.next;
    }
    rNode.next = rNode.next.next;

    return dummy.next;
};
