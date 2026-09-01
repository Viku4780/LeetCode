function findClosestElements(arr: number[], k: number, x: number): number[] {
    let right : number = arr.length-1;
    let left : number = 0;

    while(right-left>=k){
      const leftDiff : number = Math.abs(x - arr[left]);
      const rightDiff : number = Math.abs(x - arr[right]);

      if(leftDiff>rightDiff) left++;
      else                   right--;
    }

    return arr.slice(left,right+1);
};
