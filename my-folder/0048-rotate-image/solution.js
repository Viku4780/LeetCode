/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const arr = [];
    for(let i=0;i<matrix.length;i++){
       let array = [];

       matrix.forEach(ar => {
         array.push(ar[i]);
       });
         arr.push(array.reverse());
    }
    
    for(let i=0;i<matrix.length;i++){
        matrix[i] = arr[i];
    }
    return matrix;
};
