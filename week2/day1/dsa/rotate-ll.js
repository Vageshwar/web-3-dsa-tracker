// In this article, we will solve the problem: "Rotate a Linked List"

// Problem Statement: Given the head of a linked list, rotate the list to the right by k places.
// Examples:
// Example 1:
// Input:
// 	head = [1,2,3,4,5] 
// 	k = 2
// Output:
//  head = [4,5,1,2,3]
// Explanation:
//  We have to rotate the list to the right twice.

function rotateLLByK(node, k){
    if(!node || !node?.next || !k) return node;

    let length = 1;
    let temp = node;
    while(node.next){ length++; temp = temp.next}

    let breakpoint = k % length;
    let end = length - breakpoint;
    temp.next = node; // converting to circular ll
    while(end){
        temp = temp.next;
        end--;
    }
    node = temp.next;
    temp.next = null;

    return node;

}