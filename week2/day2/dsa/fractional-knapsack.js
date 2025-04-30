// Problem Statement: The weight of N items and their corresponding values are given.
// We have to put these items in a knapsack of weight W such that the total value obtained is maximized.

// Note: We can either take the item as a whole or break it into smaller units.

// Example:

// Input: N = 3, W = 50, values[] = {100,60,120}, weight[] = {20,10,30}.

// Output: 240.00

// Explanation: The first and second items  are taken as a whole  while only 20 units of the third item is taken.
// Total value = 100 + 60 + 80 = 240.00


function knapscak(values, weights, W){
    let valuesWithWeights = values.map((val, index) => {
        return ({
            value: val,
            weight: weights[index],
            profit: val / weights[index]
        })
    })

    valuesWithWeights = valuesWithWeights.sort((a,b) => b.profit - a.profit);
    let profit = 0;
    let remaningWeight = W;
    for(let i = 0; i < valuesWithWeights.length; i++){
        const currentValue = valuesWithWeights[i];
        if(remaningWeight > currentValue.weight){
            profit += currentValue.value;
            remaningWeight -= currentValue.weight;
        }else{
            let fractionProfit = currentValue.profit * remaningWeight;
            profit += fractionProfit;
            break;
        }
    }
    return profit;

}

console.log(knapscak([100,60,120], [20,10,30], 50))