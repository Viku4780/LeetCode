/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const set = new Set();
    const arr = [];

    for(let i=0;i<nums.length;i++){
      set.add(nums[i]);
    }

    for(let i=1;i<=nums.length;i++){
      if(set.has(i)){
        continue;
      }else  arr.push(i);
    }

    return arr;
};
