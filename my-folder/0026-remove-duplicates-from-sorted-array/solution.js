/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
const removeDuplicates = [];
 nums.forEach(n => {
    if(removeDuplicates.includes(n)) return;
    else  removeDuplicates.push(n);
 });
 nums.splice(removeDuplicates.length);

 for(let i=0;i<removeDuplicates.length;i++){
    nums[i] = removeDuplicates[i];
 }

 return nums.length;
};
