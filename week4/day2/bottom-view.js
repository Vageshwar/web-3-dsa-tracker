// Problem Statement: Given a Binary Tree, return its Bottom View. The Bottom View of a Binary Tree is the set of nodes visible when we see the tree from the bottom.

import { Queue } from "datastructures-js";
import { TreeNode } from "../../utils/binary-tree.js";


function bottomView(root){
    if(!root) return [];
    let ans = [];
    let q = new Queue();
    let map = new Map();
    q.push([root, 0]);
    while(!q.isEmpty()){
        const [node, b] = q.dequeue();
        map.set(b, node.val);
        if(node.left){
            q.push([node.left, b-1]);
        }
        if(node.right){
            q.push([node.right, b+1]);
        }
    }

    // [...map.keys()].sort((a,b) => a-b).forEach(key => {
    //     ans.push(map.get(key));
    // })
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
root.right.right = new TreeNode(10);
root.right.left = new TreeNode(9);

console.log(bottomView(root).join(" -> "));