// Problem Statement: Given the root of a Binary Tree, return the height of the tree. The height of the tree is equal to the number of nodes on the longest path from root to a leaf.

import { root } from "../../utils/binary-tree.js";

function heightOfBinaryTree(root){
    if(!root) return 0;
    const helper = (node, l) => {
        if(!node) return l;
        let leftL = helper(node.left, l+1);
        let rightL = helper(node.right, l+1);
        return Math.max(leftL, rightL);
    }
    return helper(root, 0);
}

console.log(heightOfBinaryTree(root));