/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let str = '';

    for(let i=0;i<s.length;i++){
        if(str[str.length-1]===s[i]){
           str = str.slice(0,-1);
        }else {
            str += s[i];
        }
    }
  return str;  
};
