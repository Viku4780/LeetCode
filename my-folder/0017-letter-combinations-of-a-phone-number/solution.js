/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const digitsObj = {
        "2" : ["a","b","c"],
        "3" : ["d","e","f"],
        "4" : ["g","h","i"],
        "5" : ["j","k","l"],
        "6" : ["m","n","o"],
        "7" : ["p","q","r","s"],
        "8" : ["t","u","v"],
        "9" : ["w","x","y","z"]
    };

    const arr = [];
    const dummyArr = [];
    
    for(let i=0;i<digits.length;i++){
        let str = digits[i];
        if(i===0){
             digitsObj[str].forEach(v => {
           arr.push(v);
        });
        }else{
           dummyArr.forEach(v => {
               for(let k=0;k<digitsObj[str].length;k++){
                 arr.push(v+digitsObj[str][k]);
               }
           });
        }
       
        for(let j=0;j<arr.length;j++){
            dummyArr[j] = arr[j];
        }
        arr.length = 0;
    }
    return dummyArr;
};
