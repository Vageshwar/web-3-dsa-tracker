// Problem Statement: Given a Binary Tree, convert the value of its nodes to follow the Children Sum Property. The Children Sum Property in a binary tree states that for every node, the sum of its children's values (if they exist) should be equal to the node's value. If a child is missing, it is considered as having a value of 0.


// Note:

// The node values can be increased by any positive integer any number of times, but decrementing any node value is not allowed.
// A value for a NULL node can be assumed as 0.
// We cannot change the structure of the given binary tree.

function childrenSum(root){
    if(!root) return;

    let child = 0; // sum
    if(root.left){
        child+= root.left.val;
    }
    if(root.right){
        child+= root.right.val;
    }
    if(child >= root.val){
        root.val = child;
    }else{
        if(root.left){
            root.left.val = root.val;
        }else if(root.right){
            root.right.val = root.val;
        }
    }
    childrenSum(root.left);
    childrenSum(root.right);

    let total = 0;
    if(root.left){
        total += root.left.val;
    }
    if(root.right){
        total += root.right.val;
    }

    if(root.left || root.right){
        root.val = total;
    }
}