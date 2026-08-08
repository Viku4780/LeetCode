/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const myObj = {};

    for(let i=0;i<s.length;i++){
      myObj[s[i]] = (myObj[s[i]] || 0) + 1;
    }

    for(let i=0;i<s.length;i++){
      if(myObj[s[i]]===1){
        return i;
      }
    }

    return -1;
};
