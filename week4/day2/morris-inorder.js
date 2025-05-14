// Problem Statement: Given a Binary Tree, implement Morris Preorder Traversal and return the array containing its preorder sequence.

import { TreeNode } from "../../utils/binary-tree.js";

// // Morris Preorder Traversal is a tree traversal algorithm aiming to achieve a space complexity of O(1) without recursion or an external data structure. The algorithm should efficiently visit each node in the binary tree in preorder sequence, printing or processing the node values as it traverses, without using a stack or recursion.

function morrisInorder(root){
    const inorder = [];
    let cur = root;
    while(cur !== null){
        if(cur.left === null){
            inorder.push(cur.val);
            cur = cur.right;
        }else {
            let prev = cur.left;
            while(prev.right && prev.right !== cur){
                prev = prev.right;
            }
            if(prev.right === null){
                prev.right = cur;
                cur = cur.left;
            }else{
                prev.right = null;
                inorder.push(cur.val);
                cur = cur.right;
            }
        }
    }
    return inorder;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(morrisInorder(root));