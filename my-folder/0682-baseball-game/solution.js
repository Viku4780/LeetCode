/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const stack = [];

    for(let char of operations){
        if(!isNaN(char)){
            stack.push(Number(char));
        }else{
            
            switch (char) {
                case "D":         
                 const a = 2*stack[stack.length-1]; 
                 stack.push(a);     
                    break;

                case "C":         
                  stack.pop();      
                    break;

                case "+":         
                 const b = Number(stack[stack.length-1]);      
                 const c = Number(stack[stack.length-2]); 
                 stack.push(b+c);     
                    break;
            }
        }
    }
    const record = stack.reduce((a,b)=>a+b,0);
    return record;
};
