/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let str = [];

    for(let char of s){
        const letter = str[str.length-1];
        if(str.length > 0 && letter !== char && letter.toUpperCase() === char.toUpperCase()) str.pop();
        else{
            str.push(char);
        }
    }
    return str.join('');
};
