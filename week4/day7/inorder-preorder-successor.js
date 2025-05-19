// GFG: https://www.geeksforgeeks.org/inorder-predecessor-successor-given-key-bst/

// You are given root node of the BST and an integer key. You need to find the in-order successor and predecessor of the given key. If either predecessor or successor is not found, then set it to NULL.


function findPreSuc(root, key){
    let pre = null;
    let suc = null;
    let current = root;

    function leftMost(node){
        while(node.left){
            node = node.left;
        }
        return node;
    }

    function rightMost(node){
        while(node.right){
            node = node.right;
        }
        return node;
    }

    while(current !== null){
        if(current.val < key){
            pre = current;
            current = current.right;
        }else if(current.val > key){
            suc = current;
            current = current.left;
        }else{
            if(current.left){
                // find rightmost 
                pre = rightMost(current.left);
            }
            if(current.right){
                suc = leftMost(current.right);
            }
        }
    }
    return [pre, suc];
}