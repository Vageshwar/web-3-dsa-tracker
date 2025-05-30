// Ram went to a specialty candy store in Ninjaland which has 'N' candies with different costs.
// The Candy shop gives a special offer to its customers. A customer can buy a single candy from the store and get at most 'K' different candies for free. Now, Ram is interested in knowing the maximum and the minimum amount he needs to spend for buying all the candies available in the store.
// Note: In both cases, Ram must utilize the offer i.e. if 'K' or more candies are available, he must take 'K' candies for every candy purchase. If less than K candies are available, he must take all candies for a candy purchase.
// ```
// For 'N' =  5 and 'K' = 2

// Let the cost of different candies in the store be: [9 8 2 6 4]

// For the minimum amount: 
// Ram can buy a candy with cost 2 and take candies with costs 9 and 8 for free. 
// Then, he can buy a candy with cost 4 and take candy with cost 7 for free. 
// Thus, the minimum cost will be 6 i.e. 2 + 4. 

// For the maximum amount: 
// Ram can buy a candy with cost 9 and take candies with costs 2 and 6 for free. 
// Then, he can buy candy at cost 8 and take candy at cost 4 for free. 
// Thus, the minimum cost will be 17 i.e. 9 + 8.

// Thus, Minimum = 6 and Maximum = 17.
// ```

// Greadily can be solved