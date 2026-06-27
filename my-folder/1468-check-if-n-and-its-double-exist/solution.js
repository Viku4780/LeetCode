/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  arr.sort((a,b) => a-b);

  // two pointer soln
  // let lef = 0;
  // let ryt = 1;

  // while(lef < ryt && ryt <= arr.length-1){
  //   if(arr[lef] < 0){
  //     if(arr[lef]/2 === arr[ryt]) return true;
  //     else if(arr[lef]/2 < arr[ryt]){
  //       lef++;
  //       if(lef === ryt) ryt++;
  //     }
  //     else   ryt++
  //   }
  //   else {
  //     if(arr[lef] * 2 === arr[ryt]) return true;
  //     else if(arr[lef] * 2 < arr[ryt]){
  //       lef++;
  //       if(lef === ryt) ryt++;
  //     }
  //     else              ryt++;
  //   }
  // }

  // return false;



  // binary solution

  for(let i=0; i<arr.length-1; i++){
    let target ;
    if(arr[i]>=0) target = arr[i] * 2;
    else          target = arr[i] / 2;

    let lef = i + 1;
    let ryt = arr.length-1;

    while(lef <= ryt && lef <= arr.length - 1){
      const med = Math.floor((lef+ryt)/2);

      if(arr[med] === target) return true;
      else if(arr[med] > target) ryt = med - 1;
      else                       lef = med + 1;
    }
  }

  return false;

};
