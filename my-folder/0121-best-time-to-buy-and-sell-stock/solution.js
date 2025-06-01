/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let buy ;
   let sell ;
   let priceArr = [];

   for(let i=0;i<prices.length-1;i++){
    buy = prices[i];
    let j = i+1;

    while(j<prices.length && prices[j] > buy){
            sell = prices[j];
            priceArr.push(sell-buy);
            j++;
    }
   }
   if(priceArr.length === 0) return 0;

   return Math.max(...priceArr);
};
