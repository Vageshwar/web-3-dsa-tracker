// Check if the given Linked List is Palindrome

import { makeLL, printLL } from "../../../utils/linked-list.js";

// Example 1:
// Input Format:
// LL: 1  2  3  2  1
// Output: True
// Explanation: A linked list with values "1 2 3 2 1" is a palindrome because its elements read the same from left to right and from right to left,
// making it symmetrical and mirroring itself.

// Example 3:
// Input Format:
// LL: 1 2 3 2 3
// Output: False
// Explanation: The linked list "1 2 3 2 3" is not a palindrome because it reads differently in reverse order,
// where "3 2 3 2 1" is not the same as the original sequence "1 2 3 2 3."


function reverseLL(node){
    let current = node;
    let prev = null;
    while(current){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev;
}

function isPalindromLL(node){
    if(!node || !node?.next) return true;
    let fast = node;
    let slow= node;

    while(fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
    }

    let newHead = reverseLL(slow.next);

    let first = node;
    let second = newHead;
    while(second){
        if(first.val !== second.val){
            reverseLL(newHead);
            return false;
        }
        second = second.next;
        first = first.next;
    }
    reverseLL(newHead);
    return true;
}

const node = makeLL([1,2,1, 1]);
printLL(node, "Original");
console.log(isPalindromLL(node));
printLL(node, "After Check");