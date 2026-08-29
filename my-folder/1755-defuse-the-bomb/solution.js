/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    if(k === 0) return code.map(v => 0);

    if(k>0){
        let windowSum = 0;
        let arr = code.slice();

        for(let i=1;i<=k;i++){
            windowSum += code[i];
        }
        for(let i=0;i<code.length;i++){
            if(i===0) code[i] = windowSum;
            else {
                if((i+k)>=code.length)  windowSum += arr[i+k-code.length] -arr[i] ;
                else       windowSum += arr[i+k] -arr[i] ;
                code[i] = windowSum;
            }
        }   
       return code;
    }

    if(k<0){
        let windowSum = 0;
        let arr = code.slice();

        for(let i=code.length-1;i>=code.length+k;i--){
            windowSum += code[i];
        }
        for(let i=0;i<code.length;i++){
            if(i===0) code[i] = windowSum;
            else {
                if((i-1+k)<0){
                    windowSum += arr[i-1]-arr[code.length + (i-1+k)] ;
                }
                else  windowSum += arr[i-1]-arr[i-1+k] ;
                code[i] = windowSum;
            }
        }   
       return code;
    }
    /*
    if(k === 0){
        for(let i=0;i<code.length;i++){
            code[i] = 0;
        }
        return code;
    }else if(k > 0){
     let windowSum = 0;
     const arr = [];

        for(let i=0;i<code.length;i++){
            if(windowSum === 0){
               for(let j=i+1;j<i+1+k;j++){
                if(j>=code.length)  windowSum += code[j-code.length];
                else  windowSum += code[j]; 
            }  
         }   
         arr.push(windowSum);
         windowSum = 0;  
        }
        return arr;
    }else {
        let windowSum = 0;
        const arr = [];

        for(let i=0;i<code.length;i++){
            if(windowSum === 0){
               for(let j=i-1;j>i-1-Math.abs(k);j--){
                if(j<0)  windowSum += code[j+code.length];
                else  windowSum += code[j];
                  
             }  
         }
         arr.push(windowSum);
         windowSum = 0;      
    }
    return  arr;
    }
    */
};


