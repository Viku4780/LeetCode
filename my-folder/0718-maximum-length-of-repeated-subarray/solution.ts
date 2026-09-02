// function findLength(nums1: number[], nums2: number[]): number {
//     let maxLen : number = 0;
//     let optimalIdx : boolean = false;
//     let pivotIdx : number = 0;

//     for(let i=0;i<nums1.length;i++){
//       for(let j=0;j<nums2.length;j++){
//         if(nums1[i]===nums2[j]){
//            optimalIdx = true;
//            maxLen = Math.max(maxLen,1);
//         }

//         let numsI = i+1;
//         let numsJ = j+1;

//         while(optimalIdx && numsJ<nums2.length && numsI<nums1.length){
//           if(nums1[numsI]===nums2[numsJ]){
//             maxLen = Math.max(maxLen,numsI-i);
//             numsJ++;
//             numsI++;
//           }else{
//             optimalIdx = false;
//           }
//         }
//       }
//     }

//     return maxLen;
// };

var findLength = function(nums1: number[], nums2: number[]) : number {
    let n = nums1.length;
    let m = nums2.length;
    let maxLength = 0;

    // Helper to calculate max common length for a specific overlap setup
    const maxLenInWindow = (i, j, len) => {
        let count = 0;
        let localMax = 0;
        for (let k = 0; k < len; k++) {
            if (nums1[i + k] === nums2[j + k]) {
                count++;
                localMax = Math.max(localMax, count);
            } else {
                count = 0; // Streak broken
            }
        }
        return localMax;
    };

    // Case 1: nums1 is fixed, nums2 slides from right to left
    for (let i = 0; i < n; i++) {
        let overlapLen = Math.min(n - i, m);
        maxLength = Math.max(maxLength, maxLenInWindow(i, 0, overlapLen));
    }

    // Case 2: nums2 is fixed, nums1 slides from right to left
    for (let j = 0; j < m; j++) {
        let overlapLen = Math.min(m - j, n);
        maxLength = Math.max(maxLength, maxLenInWindow(0, j, overlapLen));
    }

    return maxLength;
};

