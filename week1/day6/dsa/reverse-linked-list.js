// Problem Statement: Problem Statement: Given the head of a singly linked list, write a program to reverse the linked list, and return the head pointer to the reversed list.

import { makeLL, printLL } from "../../../utils/linked-list.js";

// Examples

// Example 1:
// Input Format:
// LL: 1   3   2   4 
// Output: 3
// Explanation: After reversing the linked list, the new head will point to the tail of the old linked list.

// Example 2:
// Input Format:
// LL: 4

// Output: 4

// Explanation: In this example, the linked list contains only one node hence reversing this linked list will result in the same list as the original.

// LC: https://leetcode.com/problems/reverse-linked-list/description/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let temp = head;
    let prev = null;
    printLL(head);
    while(temp){
        const node = new ListNode(0, null);
        node.next = prev;
        node.val = temp.val;
        prev = node;
        temp = temp.next;
    }
    printLL(prev);
};

function reverseLLRecursive(head){
    if(!head || !head.next) return head;

    const newHead = reverseLLRecursive(head.next);
    const front = head.next;
    front.next = head;
    head.next = null;
    return newHead;
}

const node = makeLL([1,3,2,4]);
printLL(node, "Original");
const reverseNode = reverseLLRecursive(node);
printLL(reverseNode, "Reverse");

