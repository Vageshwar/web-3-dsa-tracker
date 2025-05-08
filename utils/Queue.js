class Queue {
    constructor(){
        this.q = [];
    }

    isEmpty(){
        return this.q.length === 0
    }

    enqeue(val){
        this.q.unshift(val);
        return true;
    }

    dequeue(val){
        if(!this.isEmpty())
            return this.q.shift(val);
    }

    size(){
        return this.q.length;
    }

    front(){
        return this.q[0];
    }

    back(){
        if(!this.isEmpty())
            return this.q[this.q.length-1];
    }

}