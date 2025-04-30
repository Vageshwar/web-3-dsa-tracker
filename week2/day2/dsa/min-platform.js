// Problem Statement: We are given two arrays that represent the arrival and departure times of trains that stop at the platform.
// We need to find the minimum number of platforms needed at the railway station so that no train has to wait.

// Examples 1:

// Input: N=6, 
// arr[] = {9:00, 9:45, 9:55, 11:00, 15:00, 18:00} 
// dep[] = {9:20, 12:00, 11:30, 11:50, 19:00, 20:00}

// Output:3
// Explanation: There are at-most three trains at a time.
// The train at 11:00 arrived but the trains which had arrived at 9:45 and 9:55 have still not departed.
// So, we need at least three platforms here.

class Time {
    constructor(time){
        const [hours, min] = `${time}`.split(":");
        this.hours = parseInt(hours);
        this.mins = parseInt(min);
        console.log(this);
    }

    isGreater(anotherTime){
        return this.hours > anotherTime.hours;
    }
    
    isEqual(anotherTime){
        let hoursEqual = anotherTime.hours === this.hours;
        let minsEqual = anotherTime.mins === this.mins;
        return hoursEqual && minsEqual;
    }

    isLess(anotherTime){
        let hoursGreater = (this.hours < anotherTime.hours);
        if(hoursGreater) return true;
        let hoursSame = this.hours === anotherTime.hours;
        let minsGreate = this.mins < anotherTime.mins;
        if(hoursSame) return minsGreate;
        return false;
    }
}

function minPlaform(arrival, departure){
    let colissions = 1;
    let n = arrival.length;

    let currentTime = [new Time(departure[0])];
    for(let i = 1; i<n; i++){
        let departureTime = new Time(departure[i]);
        let arrivalTime = new Time(arrival[i]);
        let needNewPlatform = false;
        for(let j = 0; j < currentTime.length; j++){
            let time = currentTime[j];
            if(time.isLess(arrivalTime)){
                currentTime[j] = departureTime;
                break;
            }else{
                if(j === currentTime.length - 1){
                    needNewPlatform = true;
                }
            }
        }
        if(needNewPlatform){
            // console.log(i, arrival[i]);
            colissions++;
            currentTime.push(departureTime);
        }
    }
    return colissions;
}

console.log(minPlaform(["9:00", "9:45", "9:55", "11:00", "15:00", "18:00"], ["9:20", "12:00", "11:30", "11:50", "19:00", "20:00"]));