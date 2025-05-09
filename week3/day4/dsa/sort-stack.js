// Given a stack, the task is to sort it such that the top of the stack has the greatest element.

// Example 1:

// Input:
// Stack: 3 2 1
// Output: 3 2 1
// Example 2:

// Input:
// Stack: 11 2 32 3 41
// Output: 41 32 11 3 2

function sortStack(stack){
    let tempS = [];
    let temps2 = [];
    while(stack.length){
        let e = stack.pop();
        while(tempS.length && tempS[tempS.length - 1] > e){
            temps2.push(tempS.pop());
        }
        tempS.push(e);
        while(temps2.length){
            tempS.push(temps2.pop());
        }
    }
    return tempS;
}

console.log(sortStack([3,2,1]));
console.log(sortStack([11,2,32,3,41]));