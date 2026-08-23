/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 1) return s;

    // let finStr;

    // function checkPalindrome(i,f){
    //   let ini = i;
    //   let fin = f;

    //   while(ini < fin){
    //     if(s[ini] === s[fin]){
    //       ini++;
    //       fin--;
    //     }else return false;
    //   }

    //   return true;
    // }

    // for(let i=0;i<s.length-1;i++){
    //   for(let f=s.length-1;f>i;f--){
    //     if(checkPalindrome(i,f)){
    //       if(!finStr) finStr = s.slice(i,f+1);
    //       else{
    //         const soStr = s.slice(i,f+1);
    //         if(finStr.length < soStr.length) finStr = soStr;
    //       }
    //     }
    //   }
    // }

    // return finStr ? finStr : s[0];

    let maxLen=1;
    let start=0;

    const checkPalidromeAroundCenter = (left,right) => {
      while(left>=0 && right<s.length && s[left]===s[right]){
        left--;
        right++;
      }

      return right-left-1;
    }

    for(let i=0;i<s.length;i++){
      let len1 = checkPalidromeAroundCenter(i,i); // odd center
      let len2 = checkPalidromeAroundCenter(i,i+1); // even center

      const len = Math.max(len1,len2);

      if(len > maxLen){
        maxLen=len;
        start = i-Math.floor((len-1)/2);
      }
    }

    return s.substring(start,start+maxLen);
};
