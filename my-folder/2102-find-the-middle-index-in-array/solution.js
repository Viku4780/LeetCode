/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    const prefArr = new Array(nums.length+1).fill(0);

    for(let i=1;i<prefArr.length;i++){
      prefArr[i] = nums[i-1]+prefArr[i-1];
    }

    let middleIndex;

    const n=prefArr.length-1;

    for(let i=1;i<prefArr.length;i++){
      if(prefArr[i-1]===(prefArr[n]-prefArr[i])){
        middleIndex=i-1;
        break;
      }
    }

    return middleIndex>=0 ? middleIndex : -1;
};
