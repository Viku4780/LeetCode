/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const arr = [];

    nums.forEach((num,index) => {
      nums.forEach((n,i) => {
        if(n === num && i > index){
           arr.push([index,i]);
        }
      });
    });
    return arr.length;
};
