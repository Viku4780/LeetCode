function minSubArrayLen(target: number, nums: number[]): number {
    let minLen : number;
    let left : number = 0;
    let sum : number = 0;

    for(let right : number = 0;right<nums.length;right++){
      sum+=nums[right];

      while(sum>=target){
        if(minLen===undefined) minLen=right-left+1;
        else                   minLen = Math.min(minLen,right-left+1)
        sum-=nums[left];
        left++;
      }  
    }

    return minLen===undefined ? 0 : minLen;
};
