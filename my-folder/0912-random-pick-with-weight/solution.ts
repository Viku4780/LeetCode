class Solution {
   private prefixSums: number[];
   private totalSum: number;

    constructor(w: number[]) {
       this.prefixSums = [];
       let currentSum = 0;

       for(const weight of w){
        currentSum += weight;
        this.prefixSums.push(currentSum);
       }

       this.totalSum = currentSum;
    }

    pickIndex(): number {
       const target = Math.random() * this.totalSum;

       let low = 0;
       let hi = this.prefixSums.length - 1;

       while(low < hi){
        const mid = Math.floor((low + hi)/2);

        if(target > this.prefixSums[mid]){
          low = mid + 1;
        }else{
          hi = mid;
        }
       }

       return low;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
