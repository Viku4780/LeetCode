/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let count = 0;

    const checkDuplicates = (left,right) => {
      const set = new Set();

      while(left<=right){
        if(set.has(s[left]) || set.has(s[right])){
          return true;
        }else{
          if(left!==right && s[left]===s[right]) return true;
          set.add(s[left]);
          set.add(s[right]);
          left++;
          right--;
        }
      }
      return false;
    }
    
    for(let i=2;i<s.length;i++){
      if(!checkDuplicates(i-2,i)) count++;
    }

   return count;
};
