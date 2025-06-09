/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {  
    let left = 0;
    let right = height.length-1;
   let maxVal = 0;

        while(left<right){
            const area = Math.min(height[left],height[right])*(right-left);
            maxVal = Math.max(area,maxVal);
            
            if(height[left]<height[right]) left++;
            else          right--;
        }
    
    return maxVal;
};
