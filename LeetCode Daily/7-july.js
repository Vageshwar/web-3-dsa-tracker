/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
    let lastDay = 0;
    let n = events.length;

    events.sort((a,b) => {
        lastDay = Math.max(a[1], b[1], lastDay);
        return a[0] - b[0];
    })
    let minHeap = new MinPriorityQueue();
    let res = 0;

    for(let i = 1, j = 0; i <= lastDay; i++){
        while(j < n && events[j][0] <= i){
            minHeap.enqueue(events[j][1]);
            j++;
        }
        while(!minHeap.isEmpty() && minHeap.front() < i){
            minHeap.dequeue();
        }
        if(!minHeap.isEmpty()){
            minHeap.dequeue();
            res++;
        }
    }
    if(n === 1 && !res) return 1;
    return res;
};