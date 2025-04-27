// Problem Statement: Given the heads of two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

import { ListNode, makeLL, printLL } from "../../../utils/linked-list.js";


function addNumbers(l1, l2){
    let temp = new ListNode();
    let ans = temp;
    let carry = 0;

    while(l1 || l2 || carry){
        let sum = 0;
        if(l1){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2){
            sum += l2.val;
            l2 = l2.next;
        }
        sum += carry;
        carry = Math.floor(sum / 10)
        let newNode = new ListNode(sum % 10);
        temp.next = newNode;
        temp = temp.next;
    }
    return ans.next;

}

let l1 = makeLL([2,4,3]);
let l2 = makeLL([5,6,4]);
printLL(addNumbers(l1,l2));
l1 = makeLL([9,9,9,9,9,9,,9]);
l2 = makeLL([9,9,9,]);
printLL(addNumbers(l1,l2));