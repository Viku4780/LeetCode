/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    /*
    let right = nums.length-1;
    let subArrIn ;
    let max;

    if(nums.sort((a,b) => b-a).join('') === nums.join('')) return nums.sort((a,b) => a-b);
    
    for(let i=nums.length-2;i>=0;i--){
        if(nums[right]>nums[i-1]){
           subArrIn = i-1;
           max = right;
           break;
        }
        right--;
    }
    let subArr = nums.splice(subArrIn);
    const b = subArr[0];
    subArr[0] = subArr[1];
    subArr[1] = b;

    let partSort = subArr.slice(1);

    partSort.sort((a,b) => a-b);

    subArr = subArr.slice(0,1).concat(partSort);

    return nums.concat(subArr);
    */

    let i = nums.length - 2;

    // Step 1: Find the pivot
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        // Step 2: Find the rightmost element greater than pivot
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }

        // Swap pivot and successor
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 3: Reverse the suffix starting at i+1
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    return nums;

};
