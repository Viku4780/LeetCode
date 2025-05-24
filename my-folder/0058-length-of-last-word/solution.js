/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const modStr = s.trim().split(" ");
    
    return modStr[modStr.length - 1].length;  
};
