function pivotIndex(nums: number[]): number {
    const prefArr : number[] = new Array(nums.length).fill(0);
    prefArr[0] = nums[0];

    for(let i = 1; i < nums.length; i++){
      prefArr[i] = prefArr[i-1] + nums[i];
    }

    let left = 0;
    let right = nums.length-1;

    // if(prefArr[right] - prefArr[0]===0) return 0;
    
    // left++;

    while(left <= right){
      if(prefArr[right] - prefArr[left] === (left === 0 ? 0 : prefArr[left-1] )) return left;
      left++;
    }

    // if(prefArr[right-1] === 0) return right;

    return -1;
};
