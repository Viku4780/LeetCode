/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    const arr = [];

    for(let i=0;i<nums.length;i++){
        if(nums[i] === 1){
            ++count;
            if(i === nums.length - 1 && count > 0) arr.push(count);
        }else if(nums[i] === 0){
            arr.push(count);
            count = 0;
        }
    }
    return Math.max(...arr);
};
