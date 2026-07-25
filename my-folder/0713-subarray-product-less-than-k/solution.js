/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    // let count=0;

    // sliding window

    // for(let windowSize=1;windowSize<=nums.length;windowSize++){
    //   let tot=1;

    //   for(let i=0;i<windowSize;i++){
    //     tot*=nums[i];
    //   }

    //   if(tot<k) count++;

    //   for(let right=windowSize;right<nums.length;right++){
    //     tot*=nums[right];
    //     tot/=nums[right-windowSize];

    //     if(tot<k) count++;
    //   }
    // }

    // return count;

    

    // prefix sum
    // const prefixArr = new Array(nums.length+1).fill(1);

    // for(let i=0;i<nums.length;i++){
    //   prefixArr[i+1] = prefixArr[i]*nums[i];
    // }

    // for(let windowSize=1;windowSize<=nums.length;windowSize++){
    //   for(let i=windowSize;i<prefixArr.length;i++){
    //     if((prefixArr[i]/prefixArr[i-windowSize])<k) count++;
    //   }
    // }

    // return count;




    // sliding window
   
    // Edge case: if k is 0 or 1, no product of positive integers can be < k
    if (k <= 1) return 0;

    let count = 0;
    let product = 1;
    let left = 0;

    // Expand the window using the right pointer
    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];

        // Shrink the window from the left if the product is too large
        while (product >= k) {
            product /= nums[left];
            left++;
        }

        // Add the number of valid subarrays ending at the 'right' index
        count += (right - left + 1);
    }

    return count;

};
