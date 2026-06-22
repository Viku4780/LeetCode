/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let hi = nums.length - 1;

    while(low <= hi){
       const med = Math.floor((low + hi)/2);

       if(nums[med] === target) return med;
       else if(nums[med] > target) hi = med - 1;
       else                        low = med + 1;
    }

    return -1;
};
