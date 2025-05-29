// Implement "TRIE” data structure from scratch with the following functions.

// Trie(): Initialize the object of this “TRIE” data structure.
// insert(“WORD”): Insert the string “WORD” into this “TRIE” data structure.
// countWordsEqualTo(“WORD”): Return how many times this “WORD” is present in this “TRIE”.
// countWordsStartingWith(“PREFIX”): Return how many words are there in this “TRIE” that have the string “PREFIX” as a prefix.
// erase(“WORD”): Delete one occurrence of the string “WORD” from the “TRIE”.


class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.prefixCount = 0;
    this.wordCount = 0;
  }
}

var Trie = function () {
  this.root = new TrieNode();
};

Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let char of word) {
    if (!node.children[char]) {
      node.children[char] = new TrieNode();
    }
    node = node.children[char];
    node.prefixCount += 1;
  }
  node.isEndOfWord = true;
  node.wordCount += 1;
};

Trie.prototype.search = function (word) {
  let node = this._searchPrefix(word);
  return node !== null && node.isEndOfWord;
};

Trie.prototype.startsWith = function (prefix) {
  return this._searchPrefix(prefix) !== null;
};

Trie.prototype.countWordsEqualTo = function (word) {
  const node = this._searchPrefix(word);
  return node ? node.wordCount : 0;
};

Trie.prototype.countWordsStartingWith = function (prefix) {
  const node = this._searchPrefix(prefix);
  return node ? node.prefixCount : 0;
};

Trie.prototype.erase = function (word) {
  if (this.countWordsEqualTo(word) === 0) return; // Word doesn't exist
  let node = this.root;
  for (let char of word) {
    node = node.children[char];
    node.prefixCount -= 1;
  }
  node.wordCount -= 1;
  if (node.wordCount === 0) {
    node.isEndOfWord = false;
  }
};

Trie.prototype._searchPrefix = function (prefix) {
  let node = this.root;
  for (let char of prefix) {
    if (!node.children[char]) return null;
    node = node.children[char];
  }
  return node;
};
