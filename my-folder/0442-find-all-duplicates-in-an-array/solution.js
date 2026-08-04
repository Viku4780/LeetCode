/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const map = new Map();
    const arr = [];

    for(const num of nums){
      if(map.has(num)) arr.push(num);
      else             map.set(num,1);
    }

    return arr;
};
