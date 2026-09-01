function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let totalProduct : number = 1;
    let left : number = 0;
    let totalCount : number = 0;

    for(let right=0;right<nums.length;right++){
      totalProduct *= nums[right]; 
      
      while(totalProduct>=k && left<right){
        totalProduct/=nums[left];
        left++;
      }

      if(totalProduct<k) totalCount+=(right-left+1);
    }

    return  totalCount;
};
