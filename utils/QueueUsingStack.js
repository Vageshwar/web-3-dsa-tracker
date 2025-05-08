class QueueUsingStack {
    constructor(){
        this.s1 = [];
        this.s2 = [];
    }

    swapS1S2(){
        let n = this.s1.length;
        for(let i = 0; i < n; i++){
            this.s2.push(this.s1.pop());
        }
    }

    top(){
        if(this.s2.length){
            return this.s2[0];
        }else{
            this.swapS1S2();
        }
        return this.s2[0];
    }

    enqueue(val){
        this.s1.push(val);
    }

    dequeue(){
        if(this.s2.length){
            return this.s2[0];
        }
        this.swapS1S2();

    }


}