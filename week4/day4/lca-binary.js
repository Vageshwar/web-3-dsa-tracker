// Problem Statement: Given a binary tree, Find the Lowest Common Ancestor for two given Nodes (x,y).

// Lowest Common Ancestor(LCA): The lowest common ancestor is defined between two nodes x and y as the lowest node in T that has both x and y as descendants (where we allow a node to be a descendant of itself.

function lca(root, x, y){
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