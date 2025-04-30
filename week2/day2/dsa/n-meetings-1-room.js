// Problem Statement: There is one meeting room in a firm. You are given two arrays, start and end each of size N.For an index ‘i’,
// start[i] denotes the starting time of the ith meeting while end[i]  will denote the ending time of the ith meeting.
// Find the maximum number of meetings that can be accommodated if only one meeting can happen in the room at a  particular time.
// Print the order in which these meetings will be performed.

// Example:

// Input:  N = 6,  start[] = {1,3,0,5,8,5}, end[] =  {2,4,5,7,9,9}

// Output: 1 2 4 5 

// Here I have assumed that meetings are in sorted order as per start time
// if its not sorted we have to sort but while sorting will have to maintain the orginal index for meeting order
function nMeetings1Room(start, end){

    let currentTime = start[0];
    ans = [];
    start.forEach((startTime, idx) => {
        const endTime = end[idx];
        if(currentTime <= startTime){
            currentTime = endTime;
            ans.push(idx+1);
        }
    })
    return ans;

}

console.log(nMeetings1Room([1,3,0,5,8,5], [2,4,5,7,9,9]))