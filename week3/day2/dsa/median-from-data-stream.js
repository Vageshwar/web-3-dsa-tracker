// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

const { MinPriorityQueue, MaxPriorityQueue } = require("datastructures-js");

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

// Boilerplate code from Leetcode

var MedianFinder = function() {
    this.smallHeap = new MaxPriorityQueue();
    this.largeHeap = new MinPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.smallHeap.enqueue(num);

    if(this.smallHeap.front() > this.largeHeap.front()){
        this.largeHeap.enqueue(this.smallHeap.dequeue());
    }

    if (this.smallHeap.size() > this.largeHeap.size() && (this.smallHeap.size() - this.largeHeap.size()) > 1) {
        this.largeHeap.enqueue(this.smallHeap.dequeue());
        return;
    }
    else if (this.largeHeap.size() > this.smallHeap.size() && (this.largeHeap.size() - this.smallHeap.size()) > 1) {
        this.smallHeap.enqueue(this.largeHeap.dequeue());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const n1 = this.smallHeap.size();
    const n2 = this.largeHeap.size();
    let s = this.smallHeap.front();
    let l = this.largeHeap.front();
    let n = n1 + n2;
    if(n%2){
        if(n1 > n2) return s;
        else return l;
    }
    return (s + l)/2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */