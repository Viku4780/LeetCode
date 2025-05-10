/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if(nums.includes(target)){
    for(let i = 0;i < nums.length;i++){
    const el = nums[i];
    if(el === target) return i;
  }
  }else{
     nums.push(target);
    nums.sort((a,b) => a-b);
    for(let i = 0;i < nums.length ; i++){
    const el = nums[i];
    if(el === target) return i;
    }
  }
};
