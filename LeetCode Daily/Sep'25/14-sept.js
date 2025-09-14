/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordlist, queries) {
  const wordsPerfect = new Set();
  const wordsCap = new Map();
  const wordsVow = new Map();

  const isVowel = (c) => ["a", "e", "i", "o", "u"].includes(c);

  const devowel = (word) =>
    [...word].map((ch) => (isVowel(ch) ? "*" : ch)).join("");

  const solve = (query) => {
    if (wordsPerfect.has(query)) return query;

    const queryL = query.toLowerCase();
    if (wordsCap.has(queryL)) return wordsCap.get(queryL);

    const queryLV = devowel(queryL);
    if (wordsVow.has(queryLV)) return wordsVow.get(queryLV);

    return "";
  };

  // Build dictionaries
  for (const word of wordlist) {
    wordsPerfect.add(word);

    const lower = word.toLowerCase();
    if (!wordsCap.has(lower)) wordsCap.set(lower, word);

    const vowKey = devowel(lower);
    if (!wordsVow.has(vowKey)) wordsVow.set(vowKey, word);
  }

  // Answer each query
  return queries.map((q) => solve(q));
};
