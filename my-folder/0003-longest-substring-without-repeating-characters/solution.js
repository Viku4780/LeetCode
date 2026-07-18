/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let uni = new Set();
  let left=0;
  let len=0;

  for(let right=0;right<s.length;right++){
    if(uni.has(s[right])){
      len = Math.max(len,right-left);

      while(uni.has(s[right])){
         uni.delete(s[left]);
         left++;
      }
      uni.add(s[right]);
    }else{
      uni.add(s[right]);
      len = Math.max(len, right-left+1);
    }
  }

  return len;  
};
