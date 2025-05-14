// Problem Statement: Given the root of a Binary Tree, return the preorder, inorder and postorder traversal sequence of the given tree by making just one traversal.

import { Stack } from "datastructures-js";
import { TreeNode } from "../../utils/binary-tree.js";

function singlePassTraversal(root){
    if(!root) return;
    let pre = [];
    let post = [];
    let inOrder = [];
    let stack = new Stack();
    stack.push([root, 1]);
    while(!stack.isEmpty()){
        let [node, type] = stack.pop();
        if(type === 1){
            pre.push(node.val);
            type = 2;
            stack.push([node, type]);

            if(node.left !== null){
                stack.push([node.left, 1]);
            }
        }
        else if(type == 2){
            inOrder.push(node.val);
            type = 3;
            stack.push([node, type]);
            if(node.right !== null){
                stack.push([node.right, 1]);
            }
        }
        else{
            post.push(node.val);
        }
    }
    return [pre, inOrder, post];
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(10);
root.left.left.right = new TreeNode(5);
root.left.left.right.right = new TreeNode(6);
root.right = new TreeNode(3);
root.right.right = new TreeNode(11);
root.right.left = new TreeNode(9);

console.log(singlePassTraversal(root));