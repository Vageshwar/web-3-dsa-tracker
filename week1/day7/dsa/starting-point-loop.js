// Starting point of loop in a Linked List
// Problem Statement: Given the head of a linked list that may contain a cycle, return the starting point of that cycle. If there is no cycle in the linked list return null.

// Examples
// Example 1:
// Input: LL: 1  2  3  4  5 
// 1 -> 2 -> 3 -> 4
        //   | <-  5
// Output: 3
                
// Explanation: This linked list contains a loop of size 3 starting at node with value 3.
const startPoint = (node) => {
    if(!node || node?.next) return null;

    let fast = node;
    let slow = node;
    while(fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;

        // No loop
        if(!fast.next || !fast.next?.next) return null;

        if(fast === slow) break;
    }

    slow = node;
    while(slow !== fast){
        slow = slow.next;
        fast = fast.next;
    }
    // slow or fast as both will be same.
    return slow;
}