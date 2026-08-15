/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0;
    let hi = nums.length - 1;

    if(nums[low] <= nums[hi]) return nums[low];

    while(low <= hi){
      const med = Math.floor((low + hi)/2);

      if(nums[low]<=nums[hi]) return nums[low];

      if(nums[low]<=nums[med]) low=med+1;
      else                     hi=med;
    }
};


