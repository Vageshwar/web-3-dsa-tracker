// Problem Statement: Given the head of a singly linked list of `n` nodes and an integer `k`,
// where k is less than or equal to `n`. Your task is to reverse the order of each group of `k` consecutive nodes,
// if `n` is not divisible by `k`, then the last group of remaining nodes should remain unchanged.

// Example 1:
// Input Format:
// LL: 1  2  3  4  5  6  7  8  9  10
// K = 3

import {makeLL, printLL} from "../../../utils/linked-list.js";

const reverseLL = (node) => {
    let current = node;
    let prev = null;
    while(current){
        let next = current.next;
        current.next = prev;
        prev = current; 
        current = next;
    }
    return prev;
}

const getKthNode = (temp, k) => {
    k-=1;
    while(temp && k > 0){
        k--;
        temp = temp.next;
    }
    return temp;
}

const reverseInK = (node, k) => {
    if(!node || k === 1) return node;

    let temp = node;
    let prevLast = null;
    while(temp){
        let kthNode = getKthNode(temp, k);
        if(!kthNode){
            if(prevLast){
                if(temp){
                    prevLast.next = reverseLL(temp);
                }else{
                    prevLast.next = null;
                }
            }
            break;
        }
        let nextNode = kthNode.next;
        kthNode.next = null;
        reverseLL(temp);

        if(temp === node){
            node = kthNode;
        }else{
            prevLast.next = kthNode;
        }

        prevLast = temp;
        temp = nextNode;
    }
    return node;

    
}

const node = makeLL([1,2,3,4,5,6,7,8,9,10]);
printLL(node, "ORGINAL");
printLL(reverseInK(node, 5));

// Extra: https://leetcode.com/problems/reverse-linked-list-ii/ -> Solve this for practicing more about linked list reversal