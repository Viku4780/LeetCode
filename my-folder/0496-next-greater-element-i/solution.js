/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    const result = new Array(nums2.length);
    const indexArr = [];

    for(let i=0;i<nums1.length;i++){
        const idx = nums2.indexOf(nums1[i]);
        indexArr.push(idx);
    }

    for(let i=nums2.length-1;i>=0;i--){
        while(stack.length>0 && stack[stack.length-1]<=nums2[i]){
            stack.pop();
        }
        result[i] = stack.length === 0 ? -1 : stack[stack.length-1];

        stack.push(nums2[i]);
    }

    const stack2 = [];

    for(let i=0;i<indexArr.length;i++){
        stack2.push(result[indexArr[i]]);
    }
    return stack2;
};
