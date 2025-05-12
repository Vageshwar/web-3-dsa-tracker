export const isPalindrom = (s) => {
    let i = 0;
    let j = s.length - 1;
    if(i===j) return true;
    while(j > i){
        if(s.charAt(i) === s.charAt(j)) continue;
        return false;
    }
    return true;
}