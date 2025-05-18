// LC: https://leetcode.com/problems/search-in-a-binary-search-tree/description/

// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

function searchBST(root,val){
    if(!root) return null;

    if(root.val === val) return root;
    else if(root.val < val) {
        return searchBST(root.right, val);
    }
    return searchBST(root.left, val);
}