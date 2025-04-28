// Detect a Cycle in a Linked List

// Examples
// Example 1:

// Input Format:

// LL: 1 2 3 4 5


function deleteCycle(node){
    let fastP = node?.next?.next;
    let slowP = node;

    while(fastP !== slowP){
        if(!fastP || fastP?.next) return false;
        fastP = fastP?.next?.next;
        slowP = slowP.next;
    }
    return true;

}