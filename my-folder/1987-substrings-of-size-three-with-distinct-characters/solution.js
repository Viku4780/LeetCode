/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let count = 0;
    let str = s.slice(0,3);
    
     if(new Set(str).size === 3) count++;

    for(let i=1;i<=s.length-3;i++){
    let newStr = s.slice(i,i+3);

    if(new Set(newStr).size === 3) count++;
    }
    return count;
};
