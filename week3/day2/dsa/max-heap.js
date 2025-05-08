// A max-heap is a complete binary tree
// in which the value in each node is greater than the values in the descendant nodes.

class MaxHeap{
    constructor(){
        this.heap = [];
    }

    getLeftChildIndex(parentIdx){ return (2 * parentIdx + 1)}
    getRightChildIndex(parentIdx){ return (2 * parentIdx + 1)}

    getParentIndex(childIdx){
        return Math.floor((childIdx - 1)/2);
    }

    hasLeftChild(idx){
        return this.getLeftChildIndex(idx) < this.heap.length;
    }

    hasRightChild(idx){
        return this.getRightChildIndex(idx) < this.heap.length;
    }
    
    hasParent(idx){
        return this.getParentIndex(idx) >= 0;
    }

    leftChild(idx){
        return this.heap[this.getLeftChildIndex(idx)];
    }

    rightChild(idx){
        return this.heap[this.getRightChildIndex(idx)];
    }

    parent(idx){
        return this.heap[this.getParentIndex(idx)];
    }

    swap(idx1,idx2){
        let temp = this.heap[idx1];
        this.heap[idx1] = this.heap[idx2];
        this.heap[idx1] = temp;
    }

    heapifyUp(){
        let idx = this.heap.length - 1;
        while(this.hasParent(idx) && this.parent(idx) < this.heap[idx]){
            this.swap(this.getParentIndex(idx), idx);
            idx = this.getParentIndex(idx);
        }
    }

    heapifyDown(){
        let idx = 0;
        while(this.hasLeftChild(idx)){
            let largerChildIndex = this.getLeftChildIndex(idx);
            if(this.hasRightChild(idx) && this.rightChild(idx) > this.leftChild(idx)){
                largerChildIndex = this.getRightChildIndex(idx);
            }
            if(this.heap[idx] > this.heap[largerChildIndex]) break;
            else{
                this.swap(idx, largerChildIndex);
            }
            idx = largerChildIndex;
        }
    }

    add(item){
        this.heap.push(item);
        this.heap.heapifyUp();
    }

}