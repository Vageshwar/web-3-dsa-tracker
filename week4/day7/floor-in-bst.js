// GFG: https://www.geeksforgeeks.org/floor-in-binary-search-tree-bst/

// Given a Binary Search Tree and a number x, the task is to find the floor of x in the given BST, where floor means the greatest value node of the BST which is smaller than or equal to x. if x is smaller than the smallest node of BST then return -1.

function floorInBST(root, x){

    if(!root) return null;
    let floorVal = -1;
    while(root){
        if(root.val === x) return x;
        if(root.val > x){
            root = root.left;
        }
        else{
            floorVal = root.val;
            root = root.right;
        }
    }
    return floorVal;

}