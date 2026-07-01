/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const arr = s.split("");

  if(s.length <= k){
    reverseArr(arr, 0, s.length-1);
    return arr.join("");
  }else if(s.length <= 2*k){
    reverseArr(arr, 0, k-1);
    return arr.join("");
  }else{
    let i = Math.floor((s.length)/(2*k));
    const rem = (s.length)%(2*k);

    while(i>0){
      reverseArr(arr,(i-1)*2*k, (i-1)*2*k+k-1);
      i--;
    }

    if(rem <= k && k>0){
      reverseArr(arr, s.length-rem, s.length-1);
      return arr.join("");
    }else if(rem > k && k>0){
      reverseArr(arr, s.length-rem, s.length-rem + k-1);
      return arr.join("");
    }
  }
    
};

function reverseArr(arr,i,f){
  let low = i;
  let hi = f;

  while(low<hi){
    [arr[low],arr[hi]] = [arr[hi],arr[low]];

    low++;
    hi--
  }
}
