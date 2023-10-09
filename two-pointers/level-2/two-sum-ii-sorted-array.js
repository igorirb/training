/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const startFromIndex = function (numbers, index, target) {
    for (let i = index; i < numbers.length; i += 1) {
        if (numbers[i] === target) {
            return i;
        }
    }
    return -1;
}
var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length; i += 1) {
        const res = startFromIndex(numbers, i + 1, target - numbers[i]);
        if (res > i) {
            return [i + 1, res + 1];
        }
    }
};