function findMaxLength(nums: number[]): number {
    const myMap = new Map<number,number>();

    let maxLen : number = 0;
    let totalSum : number = 0;

    myMap.set(0,-1);

    for(let i = 0; i < nums.length; i++){
      totalSum += nums[i] === 0 ? -1 : 1;

      if(myMap.has(totalSum)){
        maxLen = Math.max(maxLen, i - myMap.get(totalSum));
      }
      else myMap.set(totalSum, i);
    }

    return maxLen;
};
