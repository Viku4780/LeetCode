/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // if(nums.length === 1) return 0
    // if(nums[0]>nums[1]) return 0;
    // if(nums[nums.length-1] > nums[nums.length-2]) return nums.length-1;

    // let low = 0;
    // let hi = nums.length - 1;

    // while(low<hi){
    //   const med = Math.floor((low+hi)/2);

    //   if(nums[med]>nums[med+1] && nums[med] > nums[med-1]) return med;

    //   if(nums[med] < nums[med + 1]) low = med + 1;
    //   else if(nums[med]  > nums[med + 1]) hi = med ;
    // }



    if(nums.length===1) return 0;
    if(nums[0]>nums[1]) return 0;
    if(nums[nums.length-1]>nums[nums.length-2]) return nums.length-1;

    let low=0;
    let hi=nums.length-1;

    while(low<=hi){
      const mid = Math.floor((low+hi)/2);

      if(nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1]) return mid;
      else{
        if(nums[mid]<nums[mid+1]) low=mid+1;
        else if(nums[mid]<nums[mid-1]) hi=mid-1;
      }
    }
};
