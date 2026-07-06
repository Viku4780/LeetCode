/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left = 0;
  let sum=0;
  let len=Infinity;

  for(let ryt=0;ryt<nums.length;ryt++){
    sum+=nums[ryt];

    while(sum>=target){
      len = Math.min(len, ryt-left+1);
      sum-=nums[left];
      left++;
    }
  }

  return len===Infinity ? 0 : len;
};
