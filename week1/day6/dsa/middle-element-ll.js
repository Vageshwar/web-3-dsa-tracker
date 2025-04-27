// Problem Statement: Given the head of a linked list of integers, determine the middle node of the linked list.
// However, if the linked list has an even number of nodes, return the second middle node.

import { makeLL } from "../../../utils/linked-list.js";

function middleOfLL(node){
    if(!node) return null;
    let tortoise = node;
    let rabbit = node;
    while(rabbit && rabbit.next){
        rabbit = rabbit.next.next;
        tortoise = tortoise.next;
    }
    console.log(tortoise.val);
}


const node1 = makeLL([1,2,3,4,5]);
const node2 = makeLL([1,2,3,4,5, 6]);

middleOfLL(node1);
middleOfLL(node2);