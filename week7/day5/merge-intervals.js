/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const sortedIntervals = intervals.sort((a,b) => {
        if(a[0] === b[0]){
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    let answers = []
    sortedIntervals.forEach(interval => {
        let answerLength = answers.length;
        if(!answerLength){
            answers.push(interval);
            return;
        }
        let lastInterval = answers[answerLength-1];
        if(lastInterval[1] < interval[0]){
            answers.push(interval);
            return;
        }
        const maximumEnd = Math.max(interval[1], lastInterval[1]);
        lastInterval[1] = maximumEnd;
        answers[answerLength-1] = lastInterval;
    })
    return answers;
};