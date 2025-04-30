// Problem Statement: Given a linked list where every node in the linked list contains two pointers:

// ‘next’ which points to the next node in the list.
// ‘random’ which points to a random node in the list or ‘null’.
// Create a ‘deep copy’ of the given linked list and return it.

import {ListNode} from '../../../utils/linked-list.js'

function cloneLL(node){
    let temp = node;
    let ans = new ListNode();
    while(temp){
        const newNode = new ListNode(temp.val, temp.next);
        const nextNode = new ListNode();
        nextNode.val = temp.next?.val || null;
        newNode.next = nextNode.val ? nextNode : null;
        const randomNode = new ListNode();
        randomNode.val = temp?.random.val || null;
        newNode.random = randomNode.val || null;
        temp = temp.next;
        if(!ans){
            ans = newNode;
        }
    }
    return ans;
}

function insertCopyInBetween(head) {
    let temp = head;
    while (temp !== null) {
        let nextElement = temp.next;
        // Create a new node with the same val
        let copy = new Node(temp.val);

        // Point the copy's next to
        // the original node's next
        copy.next = nextElement;

        // Point the original
        // node's next to the copy
        temp.next = copy;

        // Move to the next original node
        temp = nextElement;
    }
}

// Function to connect random
// pointers of the copied nodes
function connectRandomPointers(head) {
    let temp = head;
    while (temp !== null) {
        // Access the copied node
        let copyNode = temp.next;

        // If the original node
        // has a random pointer
        if (temp.random) {
            // Point the copied node's random to the
            // corresponding copied random node
            copyNode.random = temp.random.next;
        } else {
            // Set the copied node's random to
            // null if the original random is null
            copyNode.random = null;
        }

        // Move to the next original node
        temp = temp.next.next;
    }
}

// Function to retrieve the
// deep copy of the linked list
function getDeepCopyList(head) {
    let temp = head;
    // Create a dummy node
    let dummyNode = new Node(-1);
    // Initialize a result pointer
    let res = dummyNode;

    while (temp !== null) {
        // Creating a new List by
        // pointing to copied nodes
        res.next = temp.next;
        res = res.next;

        // Disconnect and revert back to the
        // initial state of the original linked list
        temp.next = temp.next.next;
        temp = temp.next;
    }

    // Return the deep copy of the
    // list starting from the dummy node
    return dummyNode.next;
}
