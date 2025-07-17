/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let str = [];

    for(let i=0;i<s.length;i++){
        if(isNaN(s[i])){
            str.push(s[i]);
        }else{
            str.pop()
        }
    }
    return str.join('');
};
