/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = [];
    const stack2 = [];
    let str = '';

    for(let i=0;i<s.length;i++){
        if(s[i]==="(") stack.push(s[i]);
        else if(s[i]===")") stack.pop();

        str += s[i];

        if(stack.length===0 && str.length){
           stack2.push(str);
           str = '';
        }
    }
     stack2.forEach(v => str += v.slice(1,-1));

     return str;
};
