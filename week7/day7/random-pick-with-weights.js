// You are given a 0-indexed array of positive integers w where w[i] describes the weight of the ith index.

// You need to implement the function pickIndex(), which randomly picks an index in the range [0, w.length - 1] (inclusive) and returns it. The probability of picking an index i is w[i] / sum(w).

// For example, if w = [1, 3], the probability of picking index 0 is 1 / (1 + 3) = 0.25 (i.e., 25%), and the probability of picking index 1 is 3 / (1 + 3) = 0.75 (i.e., 75%).
 

/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.probability = [];
    this.total_weight = 0;
    for(let i = 0; i < w.length; i++){
        this.total_weight+=w[i];
    }
    for(let i = 0; i < w.length; i++){
        this.probability[i] = w[i]/this.total_weight;
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */