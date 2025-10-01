/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let drank = 0;
    while(numBottles >= numExchange){
        const K = Math.floor(numBottles / numExchange);
        drank += numExchange * K
        numBottles -= numExchange * K
        numBottles += K
    }

    return drank + numBottles;
};