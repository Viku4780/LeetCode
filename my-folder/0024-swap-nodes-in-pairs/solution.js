/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    /*
    if(!head || !head.next) return head;

    let current = head;
    const dummy = new ListNode(0);
    let tail = dummy;

    while(current && current.next){
        tail.next = current.next;
        tail.next.next = current;
        current = current.next.next;
        tail = tail.next.next;
    }
    if(current) tail.next = current;
    return dummy.next;
    */

    const dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;

    while (head && head.next) {
        let first = head;
        let second = head.next;

        // Swapping
        prev.next = second;
        first.next = second.next;
        second.next = first;

        // Re-position for next swap
        prev = first;
        head = first.next;
    }

    return dummy.next;
};
