// Problem Statement: Given two sorted linked lists, merge them to produce a combined sorted linked list. Return the head of the final linked list created.

import { ListNode, makeLL, printLL } from "../../../utils/linked-list.js"

// Shell sort uses gap which is both array length / 2 here this will require extra computation initially to calculate the length of LL,
// Better to do something else 

// We can do normal merge -> create a dummy node and keep on adding the valid node


const mergeSortLL = (node1, node2) => {
    let node = new ListNode();
    const ans = node;
    let temp1 = node1;
    let temp2 = node2;
    while(temp1 && temp2){
        const val1 = temp1.val;
        const val2 = temp2.val;
        if(val1 > val2){
            const newNode = new ListNode(val2);
            node.next = newNode;
            node = node.next;
            temp2 = temp2.next;
        }else{
            const newNode = new ListNode(val1);
            node.next = newNode;
            node = node.next;
            temp1 = temp1.next;
        }
    }

    while(temp1){
        const newNode = new ListNode(temp1.val);
        node.next = newNode;
        node = node.next;
        temp1 = temp1.next;
    }
    while(temp2){
        const newNode = new ListNode(temp2.val);
        node.next = newNode;
        node = node.next;
        temp2 = temp2.next;
    }
    return ans.next;
}

const mergeSortLLNoSpace = (node1, node2) => {
    let temp = new ListNode();
    const ans = temp;
    while(node1 && node2){
        if(node1.val > node2.val){
            const newNode = new ListNode(node2.val);
            temp.next = newNode;
            temp = temp.next;
            node2 = node2.next;
        }else{
            const newNode = new ListNode(node1.val);
            temp.next = newNode;
            temp = temp.next;
            node1 = node1.next;
        }
    }
    if(node1){
        temp.next = node1;
    }else{
        temp.next = node2;
    }
    return ans.next;
}

const node1 = makeLL([2,4,8,10]);
const node2 = makeLL([1,3,3,6,11,14]);

const ans = mergeSortLLNoSpace(node1, node2);
printLL(ans);