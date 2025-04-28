// Problem Statement: Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// Examples:

// Example 1:
// Input:
// List 1 = [1,3,1,2,4], List 2 = [3,2,4]
// Output:
// 2
// Explanation: Here, both lists intersecting nodes start from node 2.

// if we start from end it should be same right ? so the point after which the elements differe is the point of intersection
// if from end it's not intersecting
// this works but has lots of special cases for all type of intersections


function findYIntersection(node1, node2){
    let d1 = node1;
    let d2 = node2;

    while(d1 !== d2){
        d1 = d1 === null ? head2 : d1.next;
        d2 = d2 === null ? head1 : d2.next;
    }
    return d1
}

// can't run this due to test case creation thing so will be doing it on leetcode