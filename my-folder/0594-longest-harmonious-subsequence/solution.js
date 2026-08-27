/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  nums.sort((a,b)=>a-b);
  let maxLen=0;
  let left=0;

  for(let i=1;i<nums.length;i++){
    if(nums[i]-nums[left]===1) maxLen=Math.max(maxLen,i-left+1);
    else if(nums[i]-nums[left]>1){
      while(nums[i]-nums[left]>1 && left<i){
        left++;
      }

      if(i===left) continue;
      maxLen=Math.max(maxLen,i-left+1);
    }
  }

  return maxLen;
};
