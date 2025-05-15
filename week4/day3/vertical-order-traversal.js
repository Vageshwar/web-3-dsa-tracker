// Problem Statement: Given a Binary Tree, return the Vertical Order Traversal of it starting from the Leftmost level to the Rightmost level. If there are multiple nodes passing through a vertical line, then they should be printed as they appear in level order traversal of the tree.

import { root } from "../../utils/binary-tree.js";

function verticalOrder(root){
    if(!root) return;
    let map = new Map();
    const helper = (node, b) => {
        if(!node) return;
        const val = map.get(b) || [];
        val.push(node.val);
        map.set(b, val);
        helper(node.left, b-1);
        helper(node.right, b+1);
    }
    helper(root, 0);
    let ans = [];
    
    for(let [_,val] of map){
        ans.push(val);
    }

    return ans;
}


console.log(verticalOrder(root));