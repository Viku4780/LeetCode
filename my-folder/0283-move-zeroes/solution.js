/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const numbers = [];
    let countZ = 0;
   for(let i=0;i<nums.length;i++){
    const num = nums[i];
        if(num === 0) {
            countZ++;
            nums.splice(i,1);
            i--;
        } 
    }
   
    for(let i=1;i<=countZ;i++){
        nums.push(0);
    }

    return nums;
};
