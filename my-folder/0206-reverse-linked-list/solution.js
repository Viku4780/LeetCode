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
var reverseList = function(head) {
    if(!head || !head.next) return head;
    /*
    const reverseHelper = (node) => {
            if (!node || !node.next) return node;

            const newHead = reverseHelper(node.next);
            node.next.next = node;
            node.next = null;
            return newHead;
        };
        head = reverseHelper(head);

        return head;
        */
        let current = head;
        let dummy = new ListNode(0);
    while (current){
        let currentRemaining = current.next;
        current.next = null;
        let dummyNext = dummy.next;
        dummy.next = current;
        dummy.next.next = dummyNext;
        current = currentRemaining;
    }  
    return dummy.next;
};
