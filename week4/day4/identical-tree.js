// Problem Statement: Given two Binary Trees, return if true if the two trees are identical, otherwise return false.


function isSameTree(r1, r2){
    if(!r1 && !r2) return true;
    if(!r1 || !r2) return false;

    return isSameTree(r1.left, r2.left) && isSameTree(r1.right, r2.right);
}