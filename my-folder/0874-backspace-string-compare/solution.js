/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let stack1 = [];
    let stack2 = [];

    for(let i=0;i<s.length;i++){
        if(s[i] !== "#") stack1.push(s[i]);
        else if(stack1.length>0 && s[i] === "#") stack1.pop();
    }

    for(let i=0;i<t.length;i++){
        if(t[i] !== "#") stack2.push(t[i]);
        else if(stack2.length>0 && t[i] === "#") stack2.pop();
    }

    return stack1.join('') === stack2.join('');
};
