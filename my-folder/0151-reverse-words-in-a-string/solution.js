/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.trim().split(" ");
    const revArr = arr.reverse()
                       .filter(ch => ch);


    return revArr.join(" ");
};
