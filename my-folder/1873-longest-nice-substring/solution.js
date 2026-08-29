/**
 * @param {string} s
 * @return {string}
 */
// var longestNiceSubstring = function(s) {
//     let result = "";
//     let lef=0;
//     let ryt=s.length-1;

//     for(let i=0;i<s.length;i++){

//     }

//     function checkUpperOrLowerIncludes(str,let){
//       const hasUpper = str.includes(let.toUpperCase());
//       const hasLower = str.includes(let.toLowerCase());
//       return hasUpper && hasLower;
//     }
// };

var longestNiceSubstring = function(s) {
    if (s.length < 2) return "";
    
    const charSet = new Set(s);
  
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (!charSet.has(char.toLowerCase()) || !charSet.has(char.toUpperCase())) {
            const leftSubstring = longestNiceSubstring(s.slice(0, i));
            const rightSubstring = longestNiceSubstring(s.slice(i + 1));
            
            return leftSubstring.length >= rightSubstring.length ? leftSubstring : rightSubstring;
        }
    }
    
    return s;
};

