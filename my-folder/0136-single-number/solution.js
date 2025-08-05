/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = nums.reduce((acc,v)=>{
        acc[v] = (acc[v] || 0) + 1;
        return acc;
    },{});

    for (let key in obj) {
    if(obj[key]===1) return Number(key);
    }
};
