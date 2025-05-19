function kthLargestBrut(root, k){
    let ans = [];
    function inorder(node){
        if(!node) return;

        inorder(node.left);
        ans.push(node.val);
        inorder(node.right);
    }

    inorder(root);
    let newK = ans.length - k;
    

    return ans[newK];
}

var kthSmallest = function(root, k) {
    let ans = -1;
    let c = 0;
    function inorderReverse(node){
        if(!node || c === k) return;

        inorder(node.right);
        c++;
        if(c===k){
            ans = node.val;
            return;
        }
        inorder(node.left);
    }

    inorderReverse(root);
    return ans;
};