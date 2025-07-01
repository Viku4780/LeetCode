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
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    let current = head;
    let current2 = head;

    let dummy = new ListNode(0);
    let tail = dummy;

    let set = new Set();
    
    let arr = [];
    
    while(current){
       if(!set.has(current.val)){
        set.add(current.val);
       }else{
         arr.push(current.val);
       }
       current = current.next;
    }
    
    while(current2){
       if(arr.includes(current2.val)) current2 = current2.next;
       else{
          tail.next = new ListNode(current2.val);
          tail = tail.next;
          current2 = current2.next;
       }
    }

    return dummy.next;
};
