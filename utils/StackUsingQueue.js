class StackUsingQueue {
    constructor(){
        this.q1 = [];
    }

    push(val){
        this.q1.push(val);
        for(let i = 0; i <this.q1.length - 1; i++){
            this.push(this.pop());
        }
    }

    pop(){
        let val = this.q1.shift();
        this.q1.splice(0, 1);
        return val;
    }

}