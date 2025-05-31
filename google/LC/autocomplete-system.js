// Trie Node class
class TrieNode {
  constructor() {
    this.children = {};
    this.sentences = new Set();
  }
}

// Autocomplete System class
class AutocompleteSystem {
  constructor(sentences, times) {
    this.root = new TrieNode();
    this.freqMap = {};
    this.currentInput = '';
    this.currentNode = this.root;

    for (let i = 0; i < sentences.length; i++) {
      this.addSentence(sentences[i], times[i]);
    }
  }

  addSentence(sentence, count) {
    this.freqMap[sentence] = (this.freqMap[sentence] || 0) + count;

    let node = this.root;
    for (let char of sentence) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
      node.sentences.add(sentence);
    }
  }

  input(c) {
    if (c === '#') {
      this.addSentence(this.currentInput, 1);
      this.currentInput = '';
      this.currentNode = this.root;
      return [];
    }

    this.currentInput += c;

    if (this.currentNode) {
      this.currentNode = this.currentNode.children[c] || null;
    }

    if (!this.currentNode) return [];

    const matches = Array.from(this.currentNode.sentences);

    matches.sort((a, b) => {
      const freqA = this.freqMap[a];
      const freqB = this.freqMap[b];
      if (freqA !== freqB) return freqB - freqA;
      return a.localeCompare(b);
    });

    return matches.slice(0, 3);
  }
}
