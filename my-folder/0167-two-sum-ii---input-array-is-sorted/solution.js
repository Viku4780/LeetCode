/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  //  for(let i=0; i<=numbers.length-1;i++){
  //     const rem = target - numbers[i];

  //   // for(let j=i+1;j<=numbers.length-1;j++){
  //   //   if(numbers[j] === rem) return [i+1,j+1];
  //   // }


  //   // binary search
  //     let low = i+1;
  //     let hi = numbers.length - 1;

  //     while(low <= hi){
  //     const med = Math.floor((low+hi)/2);

  //     if(numbers[med] === rem) return [i+1, med+1];
  //     else if(numbers[med] < rem) low = med + 1;
  //     else                        hi = med - 1;
  //   }
  //  }



   // two pointer solution

   let left = 0;
   let right = numbers.length-1;

   while(left < right){
    const sum = numbers[left] + numbers[right];
    if(sum === target) return [left+1, right+1];
    else if(sum < target) left++;
    else                  right--;
   }

  
};
