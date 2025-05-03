/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {

    for(let i = 0; i < nums.length; i++){
        const rElement = target - nums[i];
        
        for(let j = 0;j < nums.length;j++){

            if(rElement === nums[j] && i !== j){
                return [i,j];
            }
        }
       
    }
   
};

twoSum([2,7,11,15],9);

