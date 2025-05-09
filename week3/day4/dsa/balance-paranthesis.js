// Problem Statement: Check Balanced Parentheses. Given string str containing just the characters '(', ')', '{', '}', '[' and ']', check if the input string is valid and return true if the string is balanced otherwise return false.

// Note: string str is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Example 1:

// Input: str = “( )[ { } ( ) ]”

// Output: True

// Explanation: As every open bracket has its corresponding 
// close bracket. Match parentheses are in correct order 
// hence they are balanced.
// Example 2:

// Input: str = “[ ( )”

// Output: False

// Explanation: As ‘[‘ does not have ‘]’ hence it is 
// not valid and will return false.

function balanceParanthesis(str){
    let stack = [];
    let bracketMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for(let i = 0; i < str.length; i++){
        let c = str.charAt(i);
        if(bracketMap[c]){
            stack.push(c);
        }else{
            const item = stack.pop();
            if(bracketMap[item] === c){
                continue;
            }else{
                return false;
            }
        }
    }
    if(s.length) return false;
    return true;
}