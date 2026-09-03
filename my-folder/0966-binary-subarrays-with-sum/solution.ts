function numSubarraysWithSum(nums: number[], goal: number): number {
  const countAtMost = (val:number):number => {
    let left=0;
    let count=0;
    let sum = 0;

    for(let right=0;right<nums.length;right++){
      sum+=nums[right];

      while(sum>val){
        sum-=nums[left];
        left++;
      }
      count+=(right-left+1);
    }
    return count;
  }

  return goal>0 ? countAtMost(goal)-countAtMost(goal-1) : countAtMost(goal);
};
