// Problem Statement: Given a Binary Tree and a reference to a root belonging to it. Return the path from the root node to the given leaf node.

import { root, TreeNode } from "../../utils/binary-tree.js";

// No two nodes in the tree have the same data value.
// It is assured that the given node is present and a path always exists.


function rootToNode(root, node){
    if(!node || !root) return;
    const helper = (nd, path) => {
        if(!nd) return false;
        path.push(nd.val);
        if(nd.val === node.val){
            return true;
        }
        if(helper(nd.left, path) || helper(nd.right, path)){
            return true;
        }
        path.pop();
        return false;
    }
    let ans = [];

    if(helper(root, ans)){
        return ans;
    }
    return -1;
}

let node = new TreeNode(9);
console.log(rootToNode(root, node))