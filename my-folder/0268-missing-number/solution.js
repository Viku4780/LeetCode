/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // let sum = 0;
    // let legt = nums.length;
    // for(let i=0;i<legt;i++){
    //     sum += nums[i];
    // }
    // return legt*(legt + 1)/2 - sum;


    // binary search
    let sortedArr = nums.sort((a,b) => a-b);

    let start = 0;
    let end = nums.length;
     let med;

    while(start <= end){
      med = Math.floor((start+end)/2);

      if(nums[med]=== med) start = med + 1;
      else                 end = med - 1;
    }

    return start;
};
