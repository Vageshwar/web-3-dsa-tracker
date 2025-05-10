// Problem Statement: Implement Min Stack | O(2N) and O(N) Space Complexity. Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

const { Stack } = require("datastructures-js");

// Examples:

// Input Format:["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"]
// [
// [ ], [-2], [0], [-3], [ ], [ ], [ ], [ ]
// ]

// Result: [null, null, null, null, -3, null, 0, -2]
// Explanation: 
// stack < long long > st
// st.push(-2); Push element in stack
// st.push(0); Push element in stack
// st.push(-3); Push element in stack
// st.getMin(); Get minimum element fromstack
// st.pop(); Pop the topmost element
// st.top(); Top element is 0
// st.getMin(); Minimum element is -2

class minStack{

    constructor(){
        this.stack = new Stack();
        this.min = Number.MAX_SAFE_INTEGER;
    }

    pop(){
        if(!this.stack.isEmpty()) return;
        let element = this.stack.pop();
        // this means min is getting popped
        if(element < this.min){
            let poppedMin =  this.min;
            this.min = 2 * this.poppedMin - element;
            return poppedMin;
        }
        return element;
    }

    push(val){
        if(val < this.min){
            this.stack.push(2*val-this.min);
            this.min = val;
        }else
            this.stack.push(val)
    }

    getMin(){
        if(this.stack.isEmpty()) return;
        return this.min;
    }


}