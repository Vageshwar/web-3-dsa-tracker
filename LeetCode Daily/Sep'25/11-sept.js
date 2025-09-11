/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const isVowel = (c) => {
        return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'
        || c === 'A' || c === "E" || c === 'I' || c === 'O' || c === 'U';
    }

    let vowels = [];
    for(let c of s){
        if(isVowel(c)){
            vowels.push(c);
        }
    }
    vowels = vowels.sort();
    let ans = "";
    let j = 0;
    for(let i = 0; i < s.length; i++){
        if(!isVowel(s[i])){
            ans += s[i];
        }else{
            ans += vowels[j];
            j++;
        }
    }
    return ans;
};
