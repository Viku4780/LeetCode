class NumArray {
    private numArray : number[];
    
    constructor(nums: number[]) {
        // this.numArray = new Array(nums)
        this.numArray = nums;
    }

    sumRange(left: number, right: number): number {
        let sum = 0;
        for(let i = left; i <= right; i++){
          sum += this.numArray[i];
        }
        return sum;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
