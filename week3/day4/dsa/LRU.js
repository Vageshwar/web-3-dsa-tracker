// Problem Statement: “Design a data structure that follows the constraints of Least Recently Used (LRU) cache”.

// Implement the LRUCache class:

// LRUCache(int capacity) we need to initialize the LRU cache with positive size capacity.
// int get(int key) returns the value of the key if the key exists, otherwise return -1.
// Void put(int key,int value), Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache.if the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

// Example:

// Input:
//  ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
//        [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]

// Output:
//  [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation:

// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4


class LRU{
    constructor(capacity){
        this.capacity = capacity;
        this.q = [];
        this.map = {};
        this.index = {};
    }
    
    updateRecency(key){
        const idx = this.index[key];
        this.q.splice(idx, 1);
        delete this.index[key];
        this.q.push(key);
        this.index[key] = this.q.length - 1;
    }

    get(key){
        if(this.map[key]){
            this.updateRecency(key);
            return this.map[key];
        }
        return null;
    }


    put(key, value){
        if(this.map[key]){
            this.map[key] = value;
            this.q.splice(this.index[key], 1);
            this.index[key] = this.q.length-1;
            this.q.push(key);
            return;
        }
        if(this.capacity === this.q.length){
            console.log("CAPACITY FULL:");
            const item = this.q.shift();
            console.log("REMOVING LEAST RECENTLY USED: ", item);
            delete this.map[item];
            delete this.index[item];
        }
        this.q.push(key);
        this.map[key] = value;
        this.index[key] = this.q.length - 1;
    }
}


const obj = new LRU(2);
console.log(obj.put(1,1));
console.log(obj.put(2,2));
console.log(obj.get(1));
console.log(obj.put(3,3))
console.log(obj.get(2));
console.log(obj.put(4,4));
console.log(obj.get(1));
console.log(obj.get(3));
console.log(obj.get(4));



// Fastest

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addToFront(node) { // after head dummy
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    removeFromEnd() {
        if (this.tail.prev === this.head) return null;
        const lru = this.tail.prev;
        this.removeNode(lru);
        return lru;
    }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.accessOrder = new DoublyLinkedList();
    this.capacity = capacity;
    this.cache = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */

LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key);
    this.accessOrder.removeNode(node);
    this.accessOrder.addToFront(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        const node = this.cache.get(key);
        node.value = value;
        this.accessOrder.removeNode(node);
        this.accessOrder.addToFront(node);
    } else {
        const node = new Node(key, value);
        this.accessOrder.addToFront(node);
        this.cache.set(key, node);
        if (this.cache.size > this.capacity) {
            const lruNode = this.accessOrder.removeFromEnd();
            this.cache.delete(lruNode.key);
        }
    }
};
