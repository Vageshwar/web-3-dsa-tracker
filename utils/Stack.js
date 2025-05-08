class Stack {
    constructor(){
        this.stack = [];
    }

    push(val){
        this.stack.push(val);
        return true;
    }

    peak(){
        return this.stack[this.stack.length - 1];
    }

    pop(){
        return this.stack.pop();
    }

    reset(){
        this.stack = [];
    }
}