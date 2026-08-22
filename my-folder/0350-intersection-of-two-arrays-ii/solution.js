/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function(nums1, nums2) {
  // if(nums1.length > nums2.length) return intersect(nums2, nums1);

  // nums2.sort((a,b) => a-b);

  // const result = [];

  // for(let i = 0; i < nums1.length; i++){
  //   if(binarySearch(nums2, nums1[i])) result.push(nums1[i]);
  // }

  // return result;


  // two pointer
  nums1.sort((a,b)=>a-b);
  nums2.sort((a,b)=>a-b);

  let i=0;
  let j=0;
  const result = [];

  while(i<nums1.length && j<nums2.length){
    if(nums1[i]===nums2[j]){
      result.push(nums1[i]);
      i++;
      j++;
    }
    else if(nums1[i]<nums2[j]) i++;
    else                       j++;
  }

  return result;
};


// function binarySearch(nums2, target){
//   let start = 0;
//   let end = nums2.length - 1;

//   while(start<=end){
//     const med = Math.floor((start + end)/2);

//     if(nums2[med] === target)    return true;
//     else if(nums2[med] < target) start = med + 1;
//     else                         end = med - 1;
//   }

//   return false;
// }
