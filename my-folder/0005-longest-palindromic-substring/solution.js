/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 1) return s;

    let finStr;

    function checkPalindrome(i,f){
      let ini = i;
      let fin = f;

      while(ini < fin){
        if(s[ini] === s[fin]){
          ini++;
          fin--;
        }else return false;
      }

      return true;
    }

    for(let i=0;i<s.length-1;i++){
      for(let f=s.length-1;f>i;f--){
        if(checkPalindrome(i,f)){
          if(!finStr) finStr = s.slice(i,f+1);
          else{
            const soStr = s.slice(i,f+1);
            if(finStr.length < soStr.length) finStr = soStr;
          }
        }
      }
    }

    return finStr ? finStr : s[0];
};
