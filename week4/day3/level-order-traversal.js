// Problem Statement: Given the root of a Binary Tree, returns an array containing the level order traversal of the tree

import { Queue } from "datastructures-js";
import { root } from "../../utils/binary-tree.js";

function levelOrderTraversal(root){
    let q = new Queue();
    q.push(root);
    let ans = [];
    while(!q.isEmpty()){
        let level = [];
        let s = q.size();
        for(let i = 0; i <s; i++){
            const node = q.pop();
            level.push(node.val);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        ans.push(level);
    }
    return ans;
}

console.log(levelOrderTraversal(root));