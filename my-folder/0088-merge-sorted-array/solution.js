/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.length = m;
    nums2.length = n;

    const arr = [...nums1,...nums2];
    arr.sort((a,b) => a-b);
    
     for (let i = 0; i < arr.length; i++) {
        nums1[i] = arr[i];
    }
};
