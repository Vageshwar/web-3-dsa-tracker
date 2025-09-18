// import { PriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {number[][]} tasks
 */
var TaskManager = function(tasks) {
    this.tasks = new Map();

    // Max-heap: highest priority first, if tie use higher id
    this.queue = new PriorityQueue((a, b) => {
        if (a[1] !== b[1]) return b[1] - a[1];
        return b[0] - a[0];
    });

    for (const [userId, taskId, prio] of tasks) {
        this.add(userId, taskId, prio);
    }
};

/** 
 * @param {number} userId 
 * @param {number} taskId 
 * @param {number} priority
 * @return {void}
 */
TaskManager.prototype.add = function(userId, taskId, priority) {
    this.tasks.set(taskId, [userId, priority]);
    this.queue.enqueue([taskId, priority]);
};

/** 
 * @param {number} taskId 
 * @param {number} newPriority
 * @return {void}
 */
TaskManager.prototype.edit = function(taskId, newPriority) {
    const [userId] = this.tasks.get(taskId);
    this.add(userId, taskId, newPriority);
};

/** 
 * @param {number} taskId
 * @return {void}
 */
TaskManager.prototype.rmv = function(taskId) {
    this.tasks.delete(taskId);
};

/**
 * @return {number}
 */
TaskManager.prototype.execTop = function() {
    if (this.queue.isEmpty()) {
        this.tasks.clear();
        return -1;
    }

    let [taskId, prio] = this.queue.dequeue();

    while (!this.queue.isEmpty() && (!this.tasks.has(taskId) || prio !== this.tasks.get(taskId)[1])) {
        [taskId, prio] = this.queue.dequeue();
    }

    if (this.tasks.has(taskId) && prio === this.tasks.get(taskId)[1]) {
        const userId = this.tasks.get(taskId)[0];
        this.tasks.delete(taskId);
        return userId;
    }

    this.tasks.clear();
    return -1;
};

/** 
 * Usage example:
 * const obj = new TaskManager(tasks);
 * obj.add(userId, taskId, priority);
 * obj.edit(taskId, newPriority);
 * obj.rmv(taskId);
 * const res = obj.execTop();
 */