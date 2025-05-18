// LC: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/

// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.


function connect(root){
    if(!root) return root;
    
    let q = []
    q.push(root);
    while(q.length){
        let tempQ = [];
        while(q.length){
            const node1 = q.shift();
            const node2 = q.shift();
            if(node2){
                node1.next = node2;
                q.unshift(node2);
            }
            tempQ.push(node1);
        }
        while(tempQ.length){
            const node = tempQ.shift();
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
    }
    return root;
}