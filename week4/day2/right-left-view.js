// Problem Statement: Given a Binary Tree, return its right and left views.

import { Queue } from "datastructures-js";
import { TreeNode } from "../../utils/binary-tree.js";

// The Right View of a Binary Tree is a list of nodes that can be seen when the tree is viewed from the right side. The Left View of a Binary Tree is a list of nodes that can be seen when the tree is viewed from the left side.
// Ex: 
/**
 *      1
       / \
      2   3
     / \  / \
    4 10 9 11
   /
  5
 /
6
 * 
 */
//   Output: Left View: [1, 2, 4, 5, 6] , Right View: [1, 3, 11, 5, 6]
                

function printLeftRightView(root){
    if(!root) return;
    let leftView = [];
    let rightView = [];
    const leftHelper = (node, level) => {
        if(!node) return;
        if(leftView.length === level){
            leftView.push(node.val);
        }
        leftHelper(node.left, level+1);
        leftHelper(node.right, level+1);
    }
    const rightHelper = (node, level) => {
        if(!node) return;
        if(rightView.length === level){
            rightView.push(node.val);
        }
        rightHelper(node.right, level+1);
        rightHelper(node.left, level+1);
    }

    leftHelper(root, 0);
    rightHelper(root, 0);
    console.log("RIGHT VIEW: ", rightView.join(" -> "));
    console.log("LEFT VIEW: ", leftView.join(" -> "));

}


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(10);
root.left.left.right = new TreeNode(5);
root.left.left.right.right = new TreeNode(6);
root.right = new TreeNode(3);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(11);

printLeftRightView(root);