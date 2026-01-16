/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows===1) return [[1]];
    if(numRows===2) return [[1],[1,1]];
    let fir;
    let sec;
    let countRow = 1;
    const arr = [];

    while(countRow <= numRows){
        if(!arr.length) {
            arr.push([1]);
            countRow++;
        }
        if(countRow === 2){
            arr.push([1,1]);
            countRow++
        }

        if(countRow > 2){
            const lastArr = arr[arr.length-1];
            fir = 0;
            sec = 1;

            const newArr = [];

            for(let i=0;i<countRow;i++){
                if(i===0 || i===countRow-1){
                    newArr.push(1);
                }else{
                    const newNum = lastArr[fir] + lastArr[sec];
                    newArr.push(newNum);
                    fir++;
                    sec++;
                }
            }
            arr.push(newArr);
            countRow++;
        }
    }
    return arr;
};
