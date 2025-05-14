/**
 * Implement
 * Inorder Traversal
 * PreOrder Traversal
 * PostOrder Traversal
 */

import { TreeNode } from "../../utils/binary-tree.js";


function inOrder(root, vals){
    if(!root) return vals;
    vals = inOrder(root.left, vals);
    vals.push(root.val);
    vals = inOrder(root.right, vals);
    return vals;
}

function PreOrder(root, vals){
    if(!root) return vals;
    vals.push(root.val);
    vals = PreOrder(root.left, vals);
    vals = PreOrder(root.right, vals);
    return vals;
}


function postOrder(root, vals){
    if(!root) return vals;
    vals = postOrder(root.left, vals);
    vals = postOrder(root.right, vals); 
    vals.push(root.val);
    return vals;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("In Order")
console.log(inOrder(root, []).join(" -> "))
console.log("Pre Order")
console.log(PreOrder(root, []).join(" -> "))
console.log("Post Order")
console.log(postOrder(root, []).join(" -> "))