/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
     s = s.replace(/\s+/g, ''); // remove all spaces
    let stack = [];
    // let currentStr = '';
    let currentNum = 0;
    let prevOp = '+';

    for (let i = 0; i < s.length; i++){
        const char = s[i];

      if(!isNaN(char)){
        currentNum = currentNum*10 + Number(char);

      }
      
    if (isNaN(char) || i === s.length - 1) {
        if (prevOp === '+') {
            stack.push(currentNum);
        } else if (prevOp === '-') {
            stack.push(-currentNum);
        } else if (prevOp === '*') {
            stack.push(stack.pop() * currentNum);
        } else if (prevOp === '/') {
            let top = stack.pop();
            stack.push(Math.trunc(top / currentNum));
        }

        prevOp = char;
        currentNum = 0;
     }

    }

   
    return stack.reduce((a,b)=> a+b,0);
};
