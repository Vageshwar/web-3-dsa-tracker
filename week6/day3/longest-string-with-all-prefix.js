// Given a string array nums of length n. A string is called a complete string if every prefix of this string is also present in the array nums. Find the longest complete string in the array nums.

// If there are multiple strings with the same length, return the lexicographically smallest one and if no string exists, return "None" (without quotes).


// Examples:
// Input : nums = [ "n", "ni", "nin", "ninj" , "ninja" , "nil" ]

// Output : ninja

// Explanation : The word "ninja" is the longest word which has all its prefixes present in the array.

// Input : nums = [ "ninja" , "night" , "nil" ]

// Output : None

// Explanation : There is no string that has all its prefix present in array. So we return None.

class TrieNode {
    TrieNode(){
        this.children = {};
        this.flag = false;
    }

    containsKey(c){
        return Boolean(this.children[c]);
    }

    get(c){
        return this.children[c];
    }

    put(c, node){
        this.children[c] = node
    }

    setEnd(){
        this.flag = true;
    }

    isEnd(){
        return this.flag;
    }
}


class Trie {
    Trie(){
        this.root = new TrieNode();
    }

    insert(word){
        let node = this.root;
        for(let c of word){
            if(!node.children[c]){
                node.put(c, new TrieNode());
            }
            node = node.get(c);
        }
        node.setEnd();
    }

    checkIfPrefixExist(word){
        let node = this.root;

        for(let c of word){
            if(node.containsKey(c)){
                node = node.get(c);
                if(!node.isEnd()) return false;
            }else{
                return false;
            }
        }
        return true;
    }


}

function completeString(n, a){
    const trie = new Trie();
    for(let word of a){
        trie.insert(word);
    }

    let longest = "";
    for(let word of a){
        if(trie.checkIfPrefixExist(word)){ // check if prefix exist for this word
            if(word.length > longest.length){
                longest = word;
            }else if(word.length === longest.length && word.localeCompare(longest) === 1){
                longest = word;
            }
        }
    }
    if(!longest.length) return "None";
    return longest;
}