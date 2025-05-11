// LC : https://leetcode.com/problems/online-stock-span/description/

const { Stack, Queue } = require("datastructures-js");


// Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

// The span of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.

// For example, if the prices of the stock in the last four days is [7,2,1,2] and the price of the stock today is 2, then the span of today is 4 because starting from today, the price of the stock was less than or equal 2 for 4 consecutive days.
// Also, if the prices of the stock in the last four days is [7,34,1,2] and the price of the stock today is 8, then the span of today is 3 because starting from today, the price of the stock was less than or equal 8 for 3 consecutive days.
// Implement the StockSpanner class:

// StockSpanner() Initializes the object of the class.
// int next(int price) Returns the span of the stock's price given that today's price is price.



var StockSpanner = function() {
    this.stack = [];
    this.idx = -1;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.idx++;
    while(this.stack.length){
        const top = this.stack[this.stack.length - 1];
        if(top.price > price) break;
        this.stack.pop();
    }
    let ans = this.idx - (this.stack.length ? this.stack[this.stack.length - 1].idx : -1);
    this.stack.push({
        price,
        idx: this.idx,
    })

    return ans;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

let stockSpanner = new StockSpanner();
console.log(stockSpanner.next(100)); // return 1
console.log(stockSpanner.next(80));  // return 1
console.log(stockSpanner.next(60));  // return 1
console.log(stockSpanner.next(70));  // return 2
console.log(stockSpanner.next(60));  // return 1
console.log(stockSpanner.next(75));  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
console.log(stockSpanner.next(85));  // return 6



// Most optimal

var StockSpannerOptimal = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpannerOptimal.prototype.next = function(price) {
    let span = 1;
    while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
        span += this.stack.pop()[1];
    }
    this.stack.push([price, span]);
    return span;
};