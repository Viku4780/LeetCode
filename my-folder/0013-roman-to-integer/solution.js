/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romObj = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    };

    const arr = s.split('');
    let accumulator = 0;
    const arrNum = arr.map(v => romObj[`${v}`]);

    for(let i=0;i<arrNum.length;i++){
        if(arrNum[i]<arrNum[i+1] && (i+1)<arrNum.length) accumulator -= arrNum[i];
        else if(arrNum[i]>=arrNum[i+1] && (i+1)<arrNum.length) accumulator += arrNum[i];
        else   accumulator += arrNum[i];
    }
   
   return accumulator;
};
