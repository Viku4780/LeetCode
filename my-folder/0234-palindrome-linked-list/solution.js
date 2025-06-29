/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next) return true;
    let str = '';
    let current = head;

    while(current){
        str += current.val;
        current = current.next;
    }
    let reverseStr = '';

    for(let i=0;i<str.length;i++){
        reverseStr = str[i] + reverseStr;
    }
    return str === reverseStr;
};
