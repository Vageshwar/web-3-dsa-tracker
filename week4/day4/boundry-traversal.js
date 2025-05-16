// Problem Statement: Given a Binary Tree, perform the boundary traversal of the tree. The boundary traversal is the process of visiting the boundary nodes of the binary tree in the anticlockwise direction, starting from the root.


import { root, root2} from '../../utils/binary-tree.js';

function boundaryTraversal(root){
    if(!root) return [];
    const isLeaf = (node) => !node.left && !node.right;
    let ans = [];
    // traverse left boundry excluding leaf node
    ans.push(root.val);
    let curr = root.left;
    while(curr){
        if(!isLeaf(curr)){
            ans.push(curr.val);
        }
        if(curr.left) curr = curr.left;
        else{
            curr = curr.right;
        }
    }

    // traverse leaf nodes
    const helperInorder = (node) => {
        if(!node) return;
        
        if(isLeaf(node)){
            ans.push(node.val);
            return;
        }
        if(node.left)
            helperInorder(node.left);
        if(node.right)
            helperInorder(node.right);
    }
    helperInorder(root);
    // traverse right boundry
    curr = root.right;
    let rightBoundry = [];
    while(curr){
        if(!isLeaf(curr)){
            rightBoundry.push(curr.val);
        }
        if(curr.right) curr = curr.right;
        else{
            curr = curr.left;
        }
    }
    ans = ans.concat(rightBoundry.reverse());
    return ans;
}


// console.log(boundaryTraversal(root));
// console.log(boundaryTraversal(root2));


// TFU Solution

class Solution {
    // Function to check if a node is a leaf
    isLeaf(root) {
        return !root.left && !root.right;
    }

    // Function to add the left boundary of the tree
    addLeftBoundary(root, res) {
        let curr = root.left;
        while (curr) {
            // If the current node is not a leaf, add its value to the result
            if (!this.isLeaf(curr)) {
                res.push(curr.val);
            }
            // Move to the left child if it exists, otherwise move to the right child
            if (curr.left) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
    }

    // Function to add the right boundary of the tree
    addRightBoundary(root, res) {
        let curr = root.right;
        let temp = [];
        while (curr) {
            // If the current node is not a leaf, add its value to a temporary vector
            if (!this.isLeaf(curr)) {
                temp.push(curr.val);
            }
            // Move to the right child if it exists, otherwise move to the left child
            if (curr.right) {
                curr = curr.right;
            } else {
                curr = curr.left;
            }
        }
        // Reverse and add the values from the temporary vector to the result
        for (let i = temp.length - 1; i >= 0; --i) {
            res.push(temp[i]);
        }
    }

    // Function to add the leaves of the tree
    addLeaves(root, res) {
        // If the current node is a leaf, add its value to the result
        if (this.isLeaf(root)) {
            res.push(root.val);
            return;
        }
        // Recursively add leaves of the left and right subtrees
        if (root.left) {
            this.addLeaves(root.left, res);
        }
        if (root.right) {
            this.addLeaves(root.right, res);
        }
    }

    // Main function to perform the boundary traversal of the binary tree
    printBoundary(root) {
        let res = [];
        if (!root) {
            return res;
        }
        // If the root is not a leaf, add its value to the result
        if (!this.isLeaf(root)) {
            res.push(root.val);
        }

        // Add the left boundary, leaves, and right boundary in order
        this.addLeftBoundary(root, res);
        this.addLeaves(root, res);
        this.addRightBoundary(root, res);

        return res;
    }
}

// Helper function to print the result
function printResult(result) {
    for (let val of result) {
        console.log(val + " ");
    }
    console.log();
}

let solution = new Solution();

// Get the boundary traversal
let result = solution.printBoundary(root2);

// Print the result
console.log("Boundary Traversal: ");
printResult(result);

                            
                        