/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    /*
    let countLeft = 0;
    const stack = [];

    for(let char of s){
    //    const char = s[i];
       if(char !== ")"){
        if(char === "(") countLeft++;
       }else{
         if(!countLeft) continue;
         else   countLeft--;
       }
       stack.push(char);
    }

    if(!countLeft)  return stack.join(''); 
    else {
        const stack2 = [];
        
        for(let i=0;i<stack.length;i++){
            if(stack[i] === "(" && countLeft) {
                countLeft--;
                continue;
            }else  stack2.push(stack[i]);
        }
        return stack2.join('');
    }
    */

     let countLeft = 0;
    const stack = [];

    // First Pass: remove extra ')'
    for (let char of s) {
        if (char === '(') {
            countLeft++;
            stack.push(char);
        } else if (char === ')') {
            if (countLeft === 0) continue;
            countLeft--;
            stack.push(char);
        } else {
            stack.push(char);
        }
    }

    // Second Pass: remove extra '(' from the end
    const result = [];
    for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i] === '(' && countLeft > 0) {
            countLeft--;
            continue;
        }
        result.push(stack[i]);
    }

    return result.reverse().join('');
};
