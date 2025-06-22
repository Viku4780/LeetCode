/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2  
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
      function toArray(l){
        const arr = [];
        let current = l;

        while (current) {
        //  if(current.val === null) return arr;
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }

    const array = [...toArray(list1),...toArray(list2)].sort((a,b) => a-b);

    const dummy = new ListNode(0);
    let current = dummy;

    for (let digit of array) {
        current.next = new ListNode(digit);
        current = current.next;
    }

    return dummy.next;
      
};
