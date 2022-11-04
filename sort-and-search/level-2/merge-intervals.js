/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function _merge(left, right) {
    const res = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i][0] < right[j][0]) {
            res.push(left[i++]);
        } else if (left[i][0] === right[j][0]) {
            if (left[i][1] <= right[j][1]) {
                res.push(left[i++]);
            } else {
                res.push(right[j++]);
            }
        } else {
            res.push(right[j++]);
        }
    }
    for (; i < left.length; i += 1) res.push(left[i]);
    for (; j < right.length; j += 1) res.push(right[j]);
    return res;
}
function mergesort(arr) {
    const len = arr.length;
    if (len === 1) {
        return arr;
    }
    const mid = len / 2;
    let left = mergesort(arr.slice(0, mid));
    let right = mergesort(arr.slice(mid, len));
    const res = _merge(left, right);
    return res;
}
var merge = function(intervals) {
    const sortedInt = mergesort(intervals);
    const output = [sortedInt[0]];
    let outSize = 1;
    for (let i = 1; i < sortedInt.length; i += 1) {
        if (sortedInt[i][0] <= output[outSize - 1][1]) {
            if (sortedInt[i][1] > output[outSize - 1][1]) {
                output[outSize - 1][1] = sortedInt[i][1];
            }
        } else {
            output.push(sortedInt[i]);
            outSize += 1;
        }
    }
    return output;
};