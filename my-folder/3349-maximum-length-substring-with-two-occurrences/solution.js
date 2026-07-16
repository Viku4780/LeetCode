/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
  // sliding window
  let left=0;
  let len=1;

  for(let right=1; right<s.length; right++){
    checkForRepeat( right, s);
    len = Math.max(len, right-left+1);
  }

  function checkForRepeat( right, str){
   let map = new Map();

   for(let i=left;i<=right;i++){
    if(map.has(str[i])){
      if (map.get(str[i]) < 2) map.set((str[i]), map.get(str[i]) + 1);
      else {
        left++;
        checkForRepeat( right, str);
      }  
    }else {
      map.set(str[i], 1);
    }
   }
}
  return len;
};


