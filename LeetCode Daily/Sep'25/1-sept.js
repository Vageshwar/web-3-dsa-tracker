/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    const pq = new MaxPriorityQueue(([pass, total]) => ((pass + 1) / (total + 1)) - (pass / total));

    // Enqueue all classes initially
    for (const cls of classes) {
        pq.enqueue(cls);
    }

    // Assign each extra student
    for (let i = 0; i < extraStudents; i++) {
        let [pass, total] = pq.dequeue(); // dequeue → element directly
        pass++;
        total++;
        pq.enqueue([pass, total]); // reinsert updated class
    }

    // Compute final average
    let totalPassRatio = 0;
    while (!pq.isEmpty()) {
        let [pass, total] = pq.dequeue();
        totalPassRatio += pass / total;
    }

    return totalPassRatio / classes.length;
};