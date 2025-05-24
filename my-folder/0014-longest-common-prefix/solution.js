/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {   
  if (strs.length === 0) return "";

  let commonPrefix = "";
  // iterate over each character index in the first string
  for (let i = 0; i < strs[0].length; i++) {
    const ch = strs[0][i];
    // reset arr for *this* character position
    const arr = [];

    // collect any string that has the same character here
    strs.forEach(s => {
      if (s[i] === ch) arr.push(s);
    });

    // if all strings matched at position i, extend the prefix
    if (arr.length === strs.length) {
      commonPrefix += ch;
    } else {
      // as soon as one string mismatches, stop
      break;
    }
  }
  return commonPrefix;
};

