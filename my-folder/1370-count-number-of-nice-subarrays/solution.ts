function numberOfSubarrays(nums: number[], k: number): number {
  const countAtMost = (val:number):number => {
    let left=0;
    let count=0;
    let rem = val;

    for(let right=0;right<nums.length;right++){
      while(nums[right]%2!==0 && rem===0){
        if(nums[left]%2!==0) rem++;
        left++;
      }

      if(nums[right]%2!==0 && rem>0){
         rem--;
      }
      count+=(right-left+1);
    }
    return count;
  }

  return countAtMost(k)-countAtMost(k-1);
};
