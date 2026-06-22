/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0;
    let hi = nums.length - 1;

    if(nums[low] < nums[hi]) return nums[low];

    while(low <= hi){
      const med = Math.floor((low + hi)/2);

      if(nums[med] < nums[hi] ) hi = med;
      else if(nums[med] > nums[hi]) low = med + 1;
      else if(nums[med] === nums[hi])  return nums[med];
    }

    // return nums[hi+1];
};


