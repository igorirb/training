/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// coins = [2]
// amount = 3
const change = function(map, coins, amount) {
    if (amount === 0) map[amount] = 0;
    if (map[amount] !== undefined) {
        return map[amount];
    }
    let min = -1;
    for (let i = 0; i < coins.length; i += 1) {
        const newAmount = amount - coins[i];
        if (newAmount >= 0) {
            const test = change(map, coins, newAmount);
            if (test >= 0 && (min === -1 || test + 1 < min)) {
                min = test + 1;
            }
        }
    }
    map[amount] = min;
    return map[amount];
}
var coinChange = function(coins, amount) {
    const map = {};
    return change(map, coins, amount);
};