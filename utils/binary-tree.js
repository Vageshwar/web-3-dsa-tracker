export class TreeNode {
    constructor(val, left, right){
        this.val = val ? val : 0;
        this.left = left ? left : null;
        this.right = right ? right : null;
    }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(10);
root.left.left.right = new TreeNode(5);
root.left.left.right.right = new TreeNode(6);
root.right = new TreeNode(3);
root.right.right = new TreeNode(11);
root.right.left = new TreeNode(9);
export {root};

/*
 *      1
       / \
      2   3
     / \  / \
    4 10 9 11
    \
     5
      \
       6
     
*/