/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let pos=0;

    for(let i = 0;i<popped.length;i++){
        if(pushed.includes(popped[i])){
          const idx = pushed.indexOf(popped[i]);

          if(!stack.includes(popped[i])){
               for(let j=pos;j<=idx;j++){
                stack.push(pushed[j]);
                pos++;
             }
            stack.pop();
          }else{
            if(stack[stack.length-1]===popped[i]){
                stack.pop();
            }
          }
         
        }else return false;
    }
    return stack.length===0;
};
