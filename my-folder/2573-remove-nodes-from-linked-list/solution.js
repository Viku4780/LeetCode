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
var removeNodes = function(head) {

        const reverseHelper = (node) => {
            if (!node || !node.next) return node;

            const newHead = reverseHelper(node.next);
            node.next.next = node;
            node.next = null;
            return newHead;
        };

        head = reverseHelper(head);
    

        let max = head.val;
        let current = head;

        while(current && current.next){
            if(current.next.val < max){
                current.next = current.next.next;
            }else{
                current = current.next;
                max = current.val;
            }
        }
      head = reverseHelper(head);

    return head;
    
};
