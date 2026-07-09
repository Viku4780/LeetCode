/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if(nums.length === 1 && k === 1) return 0;
    nums.sort((a,b) => a-b);

    let min=Infinity;
    
    for(let i=0; i<nums.length-k+1; i++){
      min = Math.min(min, nums[k-1+i]-nums[i]);
    }

    return min;
};
