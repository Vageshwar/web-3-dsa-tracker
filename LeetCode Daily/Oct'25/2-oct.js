/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    let res = numBottles;
    let drank = numBottles;
    while (drank >= numExchange) {
        res++;
        drank -= numExchange - 1;
        numExchange++;
    }
    return res;
};