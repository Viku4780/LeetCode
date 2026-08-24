/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
   for(let left=0;left<nums.length-1;left++){
     for(let ryt=nums.length-1;ryt>left;ryt--){
      if(nums[left]>nums[ryt]) [nums[left],nums[ryt]] = [nums[ryt],nums[left]];
    }
   }
};
