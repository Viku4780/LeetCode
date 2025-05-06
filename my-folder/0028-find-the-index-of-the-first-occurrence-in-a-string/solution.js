/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
 const needleLength = needle.length;
 const haystackLength = haystack.length;

 for(let i = 0;i < haystackLength;i++){
    
    if(haystack[i] === needle[0]){
      if ( haystack.slice(i,i + needleLength) === needle) return i;
    }
 }
 return -1;
    
};
