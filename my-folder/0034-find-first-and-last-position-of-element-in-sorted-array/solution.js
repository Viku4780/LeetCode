/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let firApp ;
    let lastApp;
    const arr = [];

    for(let i=0;i<nums.length;i++){
        if(nums[i] === target){
            firApp = i;
            break;
        }
    }

    for(let i=nums.length-1;i>=0;i--){
        if(nums[i] === target){
            lastApp = i;
            break;
        }
    }
  if(firApp === undefined) firApp = -1;
  if(lastApp === undefined) lastApp = -1;

  arr.push(firApp);
  arr.push(lastApp);
  return arr;
};
