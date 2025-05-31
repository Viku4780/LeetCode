/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array
    let maxXor = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let x = nums[i];
        let j = i;

        // Step 2: Slide the window forward as long as condition holds
        while (j < n && nums[j] <= 2 * x) {
            let y = nums[j];
            maxXor = Math.max(maxXor, x ^ y);
            j++;
        }
    }

    return maxXor;
    /*
    let arr = [];
    let xor = [];
    for(let i=0;i<nums.length;i++){
        let x = nums[i];

        for(let j=i;j<nums.length;j++){
            let y = nums[j];
            if(Math.abs((x-y)) <= Math.min(x,y)) arr.push([x,y]);
        }
    }
    arr.forEach(ar => {
       let [x,y] = ar;
       xor.push(x^y);
    });
    return Math.max(...xor);
    */
};
