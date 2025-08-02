/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    function helper(s){
        let newS = "";
        for (let c of s){
            let nextChar = String.fromCharCode(((c.charCodeAt(0) - 97 + 1) % 26) + 97);
            newS += nextChar;
        }
        return s + newS;
    }

    let w = "a";
    while (w.length < k) {
        w = helper(w);
    }

    return w[k - 1];
};
