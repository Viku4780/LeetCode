/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count=0;

    const checkPalindrome = (lef,ryt,str) => {
      while(lef>=0 && ryt<str.length){
        if(str[lef]===str[ryt]){
          lef--;
          ryt++;
          count++;
        }else  return;
      }
    };
    
    for(let i=0;i<s.length;i++){
      checkPalindrome(i,i,s);
      checkPalindrome(i,i+1,s);
    } 

    return count;
};
