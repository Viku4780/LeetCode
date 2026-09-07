class NumMatrix {
    private int[][] dp;

    public NumMatrix(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) return;
        
        int m = matrix.length;
        int n = matrix[0].length;
        // Allocate 1 extra size for easy boundary handling
        dp = new int[m + 1][n + 1]; 
        
        // Build the prefix sum matrix
        for (int r = 0; r < m; r++) {
            for (int c = 0; c < n; c++) {
                dp[r + 1][c + 1] = matrix[r][c] 
                                 + dp[r][c + 1] 
                                 + dp[r + 1][c] 
                                 - dp[r][c];
            }
        }
    }
    
    public int sumRegion(int row1, int col1, int row2, int col2) {
        // Apply inclusion-exclusion principle using 1-indexed DP coordinates
        return dp[row2 + 1][col2 + 1] 
             - dp[row1][col2 + 1] 
             - dp[row2 + 1][col1] 
             + dp[row1][col1];
    }
}


/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix obj = new NumMatrix(matrix);
 * int param_1 = obj.sumRegion(row1,col1,row2,col2);
 */
