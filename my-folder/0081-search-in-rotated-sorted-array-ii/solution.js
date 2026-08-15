/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    nums.sort((a,b) => a-b);

    let low = 0;
    let hi = nums.length - 1;

    while(low<=hi){
      const med = Math.floor((low+hi)/2);

      if(nums[med] === target) return true;
      else if(nums[med] < target) low = med + 1;
      else                        hi = med - 1;
    }

    return false;

    // let low=0;
    // let hi=nums.length-1;

    // while(low<=hi){
    //   const med = Math.floor((low+hi)/2);

    //   if(nums[med]===target) return true;

    //   if(nums[low]<=nums[med]){
    //     if(nums[med]>target && nums[low]<=target){
    //       hi=med-1;
    //     }else{
    //       low=med+1;
    //     }
    //   }else{
    //     if(target>nums[med] && target<=nums[hi]){
    //       low=med+1;
    //     }else{
    //       hi=med-1;
    //     }
    //   }
    // }

    // return false;
};
