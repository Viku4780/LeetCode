/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function (l1, l2) {

   function toArray(l){
    const arr = [];
    let current = l;
    while (current) {
    arr.push(current.val);
    current = current.next;
    }
    return arr;
   }
   const arr1 = toArray(l1).reverse();
   const arr2 = toArray(l2).reverse();

   const num1 = BigInt(arr1.join(''));
    const num2 = BigInt(arr2.join(''));

    const sum = (num1 + num2).toString().split('').reverse();

    // Create the result list
    const dummy = new ListNode(0);
    let current = dummy;

    for (let digit of sum) {
        current.next = new ListNode(Number(digit));
        current = current.next;
    }

    return dummy.next;
};
