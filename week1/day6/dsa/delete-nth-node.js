// Problem Statement: Given a linked list and an integer N, the task is to delete the Nth node from the end of the linked list and print the updated linked list.

import { makeLL, printLL } from "../../../utils/linked-list.js";

// Examples
// Example 1:

// Input Format: 5->1->2, N=2
// Result: 5->2

function deleteKthNodeFromEnd(node, k){
    let fastp = node;
    let slowp = node;

    // move fast pointer to kth pos
    for(let i = 0; i<k; i++){
        fastp = fastp.next;
    }
    // if k === length of array i.e remove the first element so return node.next
    if (fastp === null)
        return node.next;
    // Now fastp is k pos ahead of slow
    while(fastp.next !== null){
        fastp = fastp.next;
        slowp = slowp.next;
    }
    let delNode = slowp.next;
    slowp.next = slowp.next.next;
    delNode = null;
    return node;
}

const node = makeLL([5,1,2]);
printLL(node);
printLL(deleteKthNodeFromEnd(node, 2));
