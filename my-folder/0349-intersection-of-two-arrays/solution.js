/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // if(nums1.length > nums2.length){
    //   return intersection(nums2, nums1);
    // }

    // const interArr = [];

    // for(let i=0; i<nums1.length; i++){
    //   if(nums2.includes(nums1[i])){
    //     if(interArr.includes(nums1[i])) continue;
    //     else             interArr.push(nums1[i]);
    //   }
    // }
    // return interArr;


    // binary solution
    // nums2.sort((a,b) => a-b);

    // const result = new Set();

    // for(let i = 0; i < nums1.length; i++){
    //   if(binarySearch(nums2, nums1[i])) result.add(nums1[i]);
    // }

    // return Array.from(result);



    // two pointer solution
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);

    const interArr = [];
    let i=0;
    let j=0;

    while(i<nums1.length && j<nums2.length){
      if(nums1[i]===nums2[j]){
        if(interArr.length===0 || interArr[interArr.length-1] !== nums1[i]){
          interArr.push(nums1[i]);
        }
        i++;
        j++;
      }
      else if(nums1[i]<nums2[j]) i++;
      else                        j++;
    }

    return interArr;
};

function binarySearch(nums2, target){
  let start = 0;
  let end = nums2.length - 1;

  while(start <= end){
    const med = Math.floor((start + end)/2);

    if(nums2[med] === target) return true;
    else if(nums2[med] < target) start = med + 1;
    else                         end = med - 1;
  }

  return false;
}
