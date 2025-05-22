/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   const num = Math.ceil(nums.length/2);
   
   const obj = nums.reduce((acc,num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
   },{});

     for(let key in obj){
        if(obj[key] >= num) return Number(key);
     }
};
