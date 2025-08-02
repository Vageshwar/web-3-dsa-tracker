/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function(basket1, basket2) {
   let freq = {};
   let m = Number.MAX_SAFE_INTEGER;

   for(let f of basket1){
    freq[f] = (freq[f] || 0) + 1;
    m = Math.min(m, f);
   }
   for(let f of basket2){
    freq[f] = (freq[f] || 0) - 1;
    m = Math.min(m, f);
   }
   const merge = [];
   for(const [k,c] of Object.entries(freq)){
        if(c%2 !== 0) return -1;
        for(let i = 0; i < Math.abs(c) / 2; i++){
            merge.push(k);
        }
   }
   merge.sort((a,b) => a-b);
   let res = 0;
   for(let i = 0; i < merge.length / 2; i++){
    res += Math.min(2*m, merge[i]);
   }
   return res;
};