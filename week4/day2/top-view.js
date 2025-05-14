// Problem Statement: Given a Binary Tree, return its Top View. The Top View of a Binary Tree is the set of nodes visible when we see the tree from the top.

import { Queue } from "datastructures-js";
import { TreeNode } from "../../utils/binary-tree.js";


function topView(root){
    if(!root) return [];

    let q = new Queue();
    q.push([root, 0]);
    let map = new Map();
    while(!q.isEmpty()){
        const [node, b] = q.pop();
        if(!map.has(b)) map.set(b, node.val);
        if(node.left){
            q.push([node.left, b-1]);
        }
        if(node.right){
            q.push([node.right, b+1]);
        }
    }
    let ans = [];
    for(let [_, val] of map){
        ans.push(val);
    }
    return ans;
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

console.log(topView(root).join(" -> "));