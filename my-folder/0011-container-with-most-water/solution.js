/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {  
  //  let left = 0;
  //  let right = height.length-1;
  //  let maxVal = 0;

  //       while(left<right){
  //           const area = Math.min(height[left],height[right])*(right-left);
  //           maxVal = Math.max(area,maxVal);
            
  //           if(height[left]<height[right]) left++;
  //           else          right--;
  //       }
    
  //   return maxVal;

  let maxWater=0;

  let left=0;
  let right=height.length-1;

  while(left<right){
    let val = (right-left)*Math.min(height[left],height[right]);
    maxWater = Math.max(maxWater,val);

    if(height[left]<height[right]) left++;
    else                           right--;
  }

  return maxWater;
};
