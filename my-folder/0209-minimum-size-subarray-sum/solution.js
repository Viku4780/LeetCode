/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  // let left = 0;
  // let sum=0;
  // let len=Infinity;

  // for(let ryt=0;ryt<nums.length;ryt++){
  //   sum+=nums[ryt];

  //   while(sum>=target){
  //     len = Math.min(len, ryt-left+1);
  //     sum-=nums[left];
  //     left++;
  //   }
  // }

  // return len===Infinity ? 0 : len;


  for(let i=1;i<nums.length;i++){
    nums[i]=nums[i]+nums[i-1];
  }

  if(nums[nums.length-1]<target) return 0;
  if(nums[0]>=target)            return 1;

  let minLen=nums.length;

  for(let i=0;i<=nums.length-1;i++){
    let low=i;
    let hi=nums.length-1;

    while(low<=hi){
      const mid = Math.floor((low+hi)/2);

      if(nums[mid]===target){
        minLen=Math.min(minLen,mid+1);
        low=mid+1;
      }
      else if(nums[mid]<target) low=mid+1;
      else{
        minLen=Math.min(minLen,mid+1);
        if(nums[mid]-nums[i]>=target){
          minLen=Math.min(minLen,mid-i);
          hi=mid-1;
        }else   low=mid+1;     
      }
    }
  }

  return minLen;
};
