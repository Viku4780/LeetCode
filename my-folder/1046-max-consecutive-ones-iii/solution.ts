function longestOnes(nums: number[], k: number): number {
    let maxOneLen : number = 0;
    let left : number = 0;
    let remainingFlip : number = k;

    for(let right=0;right<nums.length;right++){
      while(nums[right]===0 && remainingFlip===0 && left<=right){
        if(nums[left]===0){
          remainingFlip++;
        }
        left++;
      }

      if(nums[right]===0 && remainingFlip>0) remainingFlip--;

      maxOneLen = Math.max(maxOneLen,right-left+1);
    }

    return maxOneLen;
};
