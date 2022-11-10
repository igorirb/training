/**
 * @param {number[][]} intervals
 * @return {number}
 */
function merge (left, right) {
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
function mergesort (arr) {
    const len = arr.length;
    if (len === 1) {
        return arr;
    }
    const mid = Math.round(len / 2);
    const left = mergesort(arr.slice(0, mid));
    const right = mergesort(arr.slice(mid, len));
    return merge(left, right);
}
// [[0,30],[5,10],[15,20]]
// [[4,9],[4,17],[10,12],[11,17]
var minMeetingRooms = function(intervals) {
    const sortedInt = mergesort(intervals);
    // console.log(sortedInt);
    let rooms = 1;
    let endTimes = [sortedInt[0][1]];
    for (let i = 1; i < sortedInt.length; i += 1) {
        // console.log(rooms, endTimes, sortedInt);
        if (endTimes[0] > sortedInt[i][0]) {
            rooms += 1
        } else {
            endTimes.shift();
        }
        endTimes.push(sortedInt[i][1]);
        endTimes = endTimes.sort((a, b) => a - b);
    }
    return rooms;
};