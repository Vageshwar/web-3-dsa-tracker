class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
         let low = 1;
         let high = Math.max(...piles);
         let n = piles.length;
         if(n === h) return high;

         function isPossible(k){
            let hours = 0;
            for(const pile of piles){
                hours += Math.ceil(pile / k);
            }
            return hours <= h;
         }
         let res = high;

         while(high >= low){
            let mid = Math.floor((low + high)/2);
            if(isPossible(mid)){
                res = mid;
                high = mid-1;
            }else{
                low = mid+1;
            }
         }
         return res;
    }
}
