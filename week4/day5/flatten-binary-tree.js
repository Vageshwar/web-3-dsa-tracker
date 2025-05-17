/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root) return null;
    let current = root;
    while(current){
        if(current.left){
            let predecessor = current.left;
            while(predecessor.right){
                predecessor = predecessor.right;
            }
            predecessor.right = current.right;
            current.right = current.left;
            current.left = null;
        }
        current = current.right;
    }
};

// RECURSION

var flatten2 = function(root) {
    if(!root) return null;
    let prev = null;
    const helper = (node) => {
        if(!node) return;
        helper(node.right);
        helper(node.left);
        node.right = prev;
        node.left = null;
        prev = node;
    }
    helper(root);
};