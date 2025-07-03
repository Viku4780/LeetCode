/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     const parenthesesObj = {
            '(':')',
            '{':'}',
            '[':']'
        };
        const arr = [];

        for(let i=0;i<s.length;i++){
            const char = s[i];
            if( char === '(' || char === '{' || char === '[') arr.push(char);
            else{
                if(parenthesesObj[arr.pop()] !== char) return false;
            }            
        }

        return arr.length === 0;
};
