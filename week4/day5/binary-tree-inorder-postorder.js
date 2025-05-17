// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

// LC: https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let map = new Map();
    if(inorder.length !== postorder.length) return null;
    inorder.forEach((item,idx) => map.set(item, idx));

    const helper = (inStart, inEnd, postStart, postEnd) => {
        if(inStart > inEnd || postStart > postEnd) return null;

        const root = new TreeNode(postorder[postEnd]);
        const idx = map.get(postorder[postEnd]);
        const len = idx - inStart;
        root.left = helper(inStart, idx-1,postStart, postStart+len-1);
        root.right = helper(idx+1, inEnd, postStart+len,postEnd-1);

        return root;
    }

    return helper(0, inorder.length-1, 0, postorder.length-1);
    
};