// Problem Statement: Given a linked list containing ‘N’ head nodes where every node in the linked list contains two pointers:

// ‘Next’ points to the next node in the list
// ‘Child’ pointer to a linked list where the current node is the head
// Each of these child linked lists is in sorted order and connected by a 'child' pointer. Your task is to flatten this linked list such that all nodes appear in a single layer or level in a 'sorted order'.

import {ListNode, printLL} from '../../../utils/linked-list.js';

function mergeSortedLL(node1, node2){
    let temp1 = node1;
    let temp2 = node2;
    let newNode = new ListNode();
    let ans = newNode;
    while(temp1 && temp2){
        const tempNode = new ListNode();
        if(temp1.val > temp2.val){
            tempNode.val = temp2.val;
            temp2 = temp2.child; 
        }else{
            tempNode.val = temp1.val;
            temp1 = temp1.child;
        }
        newNode.next = tempNode;
        newNode = tempNode;
    }
    if(temp1){
        newNode.next = temp1;
    }else if(temp2){
        newNode.next = temp2;
    }
    return ans;
}

function flattenLL(node){
        if(!node || !node?.next) return node;

        let mergedNode = flattenLL(node.next);
        node = mergeSortedLL(node, mergedNode);
        return node;
}