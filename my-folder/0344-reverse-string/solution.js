/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // const sArr = s.slice();
    // for(let i=s.length-1;i>=0;i--){
    //    s[i] = sArr[s.length-1-i];
    // }
    // return s;

    // two pointer
    let left = 0;
    let right = s.length - 1;

    while(left<right){
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }

    return s;
};
