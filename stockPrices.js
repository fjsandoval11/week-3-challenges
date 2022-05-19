// const best = (prices) => {
//     let lowest = 0
//     let difference = 0

//     for (let i = 0; i < prices.length; i++){
//         if(difference === 0 || prices[i] < difference ) {
//             difference = prices[i]
//         }
//         let diff = price[i] - difference
//     }
// }

const best = (prices) => {
    let profit = 0 

    for (let i = 0; i < prices.length; i++){
        for (let j = i + 1; j < prices.length; j++){
            if (prices[j] - prices[i] > profit){
                profit = prices[j] - prices[i]
            }
        }
    }
    return profit
}

console.log(best([15, 10, 20, 22, 1, 9]))
console.log(best([1, 2, 3, 4, 5]))