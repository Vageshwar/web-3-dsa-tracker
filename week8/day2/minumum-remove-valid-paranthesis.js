// LC: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/

// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string


/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (str) {
    const stack = [];
    const splitted_str = str.split("");
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === "(") stack.push(i);
        else if (char === ")") {
            if (stack.length === 0) {
                splitted_str[i] = "";
            } else {
                stack.pop();
            }
        }
    }
    for (let i = 0; i < stack.length; i++) {
        const char = stack[i];
        splitted_str[char] = "";
    }

    return splitted_str.join("");
};