/**
 * @param {number[]} nums
 * @return {number}
 */
 /*
var pivotIndex = function(nums) {

        let leftSum ;
        let rightSum ;

    for(let i=0;i<nums.length;i++){
         leftSum = 0;
         rightSum = 0;
     for(let j=0;j<nums.length;j++){
        if(j < i){
            leftSum += nums[j];
        }
        else if(j > i){
            rightSum += nums[j];
        }
     }

     if(i === 0 && rightSum === 0){
        return 0;
     }else if(i === nums.length-1 && leftSum === 0){
        return nums.length - 1;
     }

     if(leftSum === rightSum){
        return i;
     }
 }
 return -1;    
};
*/


// best version for this 

var pivotIndex = function(nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - leftSum - nums[i];

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
};


