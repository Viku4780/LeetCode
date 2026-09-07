function checkSubarraySum(nums: number[], k: number): boolean {
    const reminderMap = new Map<number , number>();
    reminderMap.set(0,-1);

    let totalSum : number = 0;

    for(let i = 0; i < nums.length; i++){
      totalSum += nums[i];

      let reminder = totalSum % k;

      if(reminder < 0) reminder += k;

      if(reminderMap.has(reminder)){
        if(i - reminderMap.get(reminder) >= 2) return true;
      }else{
        reminderMap.set(reminder,i);
      }
    }

    return false;
};
