/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
     let res = 0;
    for (const op of operations) {
        if ("X++" === op || "++X" === op) {
            res++;
        } else {
            res--;
        }
    }
    return res;
};