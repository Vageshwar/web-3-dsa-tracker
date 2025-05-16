// Problem Statement: Given a Binary Tree, return true if it is a Balanced Binary Tree else return false. A Binary Tree is balanced if, for all nodes in the tree, the difference between left and right subtree height is not more than 1.

function isBalancedTree(root){
    if(!root) return true;

    function helper(root){
        if(!root) return 0;

        const leftHeight = helper(root.left);
        if(leftHeight === -1) return -1;
        const rightHeight = helper(root.right);
        if(rightHeight === -1) return -1;
        if(Math.abs(leftHeight - rightHeight) > 1) return -1;
        return Math.max(leftHeight, rightHeight)+1;
    }

    return helper(root) !== -1;
}