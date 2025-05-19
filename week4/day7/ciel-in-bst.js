function cielBST(root, key){
    if(!root) return -1;

    let ciel = -1;
    while(root){
        if(root.val === key) return key;
        
        if(root.val > key){
            ciel = root.val
            root = root.left;
        }
        else{
            root = root.right;
        }
    }
    return ciel;
}

