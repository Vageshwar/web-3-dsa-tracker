// LC: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/

// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

function lcaBT(root, x, y){
    if(!root) return null;
    if(root === x || root === y) return root;

    let left = lca(root.left, x,y);
    let right = lca(root.right, x,y);

    if(!left){
        return right;
    }
    else if(!right) return left;
    else{
        return root;
    }
}

function lcaBST(root, p, q){
    if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(root.right, p, q)
    } else if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left, p, q)
    } else {
        return root
    }
}