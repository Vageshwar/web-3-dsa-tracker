// Given a binary tree and the task is to find the spiral order traversal of the tree and return the list containing the elements.
// Spiral order Traversal: Starting from level 0 for root node, for all the even levels we print the node's value from right to left and for all the odd levels we print the node's value from left to right.

import { Queue } from "datastructures-js";
import { root } from "../../utils/binary-tree.js";

function levelOrderTraversalSpiral(root){
    // let q = new Queue();
    // q.push(root);
    // let order = true;
    // let ans = [];
    // while(!q.isEmpty()){
    //     let level = [];
    //     let s = q.size();
    //     for(let i = 0; i <s; i++){
    //         const node = q.dequeue();
    //         if(order){
    //             level.push(node.val);
    //         }else{
    //             level.unshift(node.val);
    //         }
    //         if(node.left) q.push(node.left);
    //         if(node.right) q.push(node.right);
    //     }
    //     ans.push(level);
    //     order = !order;
    // }
    // return ans;

    if (!root) return [];

    let q = [root];
    let order = true;
    let ans = [];

    while (q.length > 0) {
        let level = [];
        let size = q.length;

        for (let i = 0; i < size; i++) {
            const node = q.shift();

            if (order) {
                level.push(node.val); // left to right
            } else {
                level.unshift(node.val); // right to left
            }

            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }

        ans.push(level);
        order = !order;
    }

    return ans;
}

console.log(levelOrderTraversalSpiral(root));


// using array as Queue for LC submission
// if (!root) return [];

//     let q = [root];
//     let order = true;
//     let ans = [];

//     while (q.length > 0) {
//         let level = [];
//         let size = q.length;

//         for (let i = 0; i < size; i++) {
//             const node = q.shift();

//             if (order) {
//                 level.push(node.val); // left to right
//             } else {
//                 level.unshift(node.val); // right to left
//             }

//             if (node.left) q.push(node.left);
//             if (node.right) q.push(node.right);
//         }

//         ans.push(level);
//         order = !order;
//     }

//     return ans;