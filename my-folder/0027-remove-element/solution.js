/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // let k = 0;
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] !== val){
    //         nums[k] = nums[i];
    //         k++;
    //     }
    // }
    // return k;

    let lef = 0;

    for(let ryt=0;ryt<nums.length;ryt++){
      if(nums[ryt]!==val){
        nums[lef]=nums[ryt];
        lef++;
      }
    }

    return lef;
};
