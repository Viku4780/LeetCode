/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// var findClosestElements = function(arr, k, x) {
//     // sliding window:- shrinking sliding window using two pointer
//     // let left=0;
//     // let right=arr.length-1;

//     // while(right-left>=k){
//     //   if(Math.abs(arr[right]-x)>=Math.abs(x-arr[left])){
//     //      right--;
//     //   }else   left++;
//     // }

//     // return arr.slice(left,right+1);



//     // binary search
//     // we should find the best possible index that gives a value closer to value of x
//     // after this we can find the best possible Kth element surrounding the  value x using two pointer

//     // const findingOptimalIndex = (nums,target) => {
//     //   let low = 0;
//     //   let hi = nums.length-1;

//     //   while(low<=hi){
//     //     const mid = Math.floor((low+hi)/2);

//     //     if(nums[mid]===target) return mid;
//     //     else if(nums[mid]<target) low=mid+1;
//     //     else                      hi=mid-1;
//     //   }

//     //   if (low >= nums.length) return nums.length - 1;
//     //   if (low === 0) return 0;

//     //   return Math.abs(target-nums[low]) < Math.abs(target-nums[low-1]) ? low : low-1;
//     // }

//     // let closestIdx = findingOptimalIndex(arr, x);
//     // let left = closestIdx;
//     // let ryt =  closestIdx;

//     // while(ryt-left+1<k){
//     //    if (left === 0) {
//     //         ryt++; 
//     //     } else if (ryt === arr.length - 1) {
//     //         left--; 
//     //     } else {
//     //         let leftDiff = Math.abs(x - arr[left - 1]);
//     //         let rightDiff = Math.abs(x - arr[ryt + 1]);

//     //         if (leftDiff <= rightDiff) {
//     //             left--;
//     //         } else {
//     //             ryt++;
//     //         }
//     //     }
//     // }

//     // return arr.slice(left, ryt + 1);



//     // binary search

//     let low = 0;
//     let hi = arr.length - k; // The window start cannot exceed this index

//     while (low < hi) {
//         let mid = Math.floor((low + hi) / 2);
//         // Compare the distance of x to the element left of the window vs right of the window
//         if (x - arr[mid] > arr[mid + k] - x) {
//             low = mid + 1; // arr[mid] is further away than arr[mid + k], shift window right
//         } else {
//             hi = mid; // arr[mid] is closer or equal, window could start here or further left
//         }
//     }

//     return arr.slice(low, low + k);

// };

// var findClosestElements = function(arr,k,x){
//   const n=arr.length;
//   if(arr[0]>=x) return arr.slice(0,k);
//   if(arr[n-1]<=x) return arr.slice(n-k);

//   let count=k;
//   let low=0;
//   let hi=n-1;

//   while(low<=hi){
//     const mid = Math.floor((low+hi)/2);

//     if(arr[mid]===x){
//       hi=mid;
//       break;
//     }
//     else if(arr[mid]<x) low=mid+1;
//     else                hi=mid-1;
//   }

//   if(hi>=low) low=hi-1;
//   else {
//     hi=low;
//     low=hi-1;
//   }

//   const result=[];

//   while(count>0){
//     const lefDiff = Math.abs(x-arr[low]);
//     const rytDiff = Math.abs(x-arr[hi]);

//     count--;

//     if(low<0){
//       result.push(arr[hi]);
//       hi++;
//       continue;
//     }
//     if(hi>=n){
//       result.push(arr[low]);
//       low--;
//       continue;
//     }

//     if(lefDiff<=rytDiff ){
//       result.push(arr[low]);
//       low--
//     }else{
//       result.push(arr[hi]);
//       hi++
//     }
//   }

//   return result.sort((a,b)=>a-b);

// }

var findClosestElements = function(arr,k,x){
  if(arr.length===k) return arr;

  let left=0;
  let right=arr.length-1;

  while(right-left+1>k){
    const lefDiff = Math.abs(x-arr[left]);
    const rytDiff = Math.abs(x-arr[right]);

    if(lefDiff<=rytDiff) right--;
    else                 left++;
  }

  return arr.slice(left,right+1);
}
