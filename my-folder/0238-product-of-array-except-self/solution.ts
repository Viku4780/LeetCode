function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const answer : number[] = new Array(n).fill(1);
    let prefixProduct : number = 1;

    for(let i = 0; i < n; i++){
        answer[i] *= prefixProduct;
        prefixProduct *= nums[i];
    }

    let suffixProduct : number = 1;

    for(let i = n - 1; i >= 0; i--){
        answer[i] *= suffixProduct;
        suffixProduct *= nums[i]; 
    }

    return answer;
};
