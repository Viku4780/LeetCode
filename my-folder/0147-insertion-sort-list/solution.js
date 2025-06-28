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
var insertionSortList = function(head) {
    if(!head || !head.next) return head;

    const dummy = new ListNode(0);

    let current = head;

    while(current){
       let prev = dummy;

       let nextNode = current.next;

       while(prev.next && prev.next.val < current.val){
        prev = prev.next;
       } 

       current.next = prev.next;
       prev.next = current;

       current = nextNode;
    }
    return dummy.next;
};
