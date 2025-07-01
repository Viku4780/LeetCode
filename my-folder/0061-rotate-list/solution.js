/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next || k===0) return head;
    let dummy = new ListNode(0);
    dummy.next = head;

    let l = 0;
    let current = head;

    while(current){
        current = current.next;
        l++;
    }
    
    if(k>l) k=k%l;
    let i = 0;

    while(i<k){
         let last = dummy.next;
         let secondLast = dummy;

        if(!last.next || !last) return dummy.next;

        while(last.next){
            last = last.next;
            secondLast = secondLast.next;
        }
        secondLast.next = null;

        last.next = dummy.next;
        dummy.next = last;

        i++;
    }
    return dummy.next;
};
