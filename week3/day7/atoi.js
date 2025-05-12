// The atoi() function in C takes a string (which represents an integer) as an argument and returns its value of type int. So basically the function is used to convert a string argument to an integer.

function atoi(str){
    let res = 0;
    let firstChar = res.charAt(0);
    let sign = 1;
    if(firstChar === '-'){
        sign = 0;
    }
    for(let i = 0; i < str.length; i++){
        if(/^\d+/.test(str[i])){
            res = res * 10 + str[i].charCodeAt(0) - "0".charCodeAt(0);
        }else{
            return "NaN"
        }
    }
    return res;
}

console.log(atoi("10"));
console.log(atoi("-10"));