/*
 Given an array of integers A and an integer number X, 
 find all pairs of indices (i, j), i < j, such that A[i] * A[j] == X.

 Input 1
      0  1  2  3  4   5  6
 A = [2, 7, 3, 6, 5, 12, 4]
 X = 24

 Output 1
 [ (0, 5), (3, 6) ]

*/
function solution(A, X) {
    const res = [];
    for (let i = 0; i < A.length; i += 1) {
        for (let j = i + 1; j < A.length; j += 1) {
            if (A[i] * A[j] === X) {
                res.push([i, j]);
            }
        }
    }
    return res;
}
// {12:0, 3.xs:1, 8:2, 4:3, 4.asx:4, 
function solution(A, X) {
    const res = [];
    const map = {};
    for (let i = 0; i < A.length; i += 1) {
        const div = X / A[i];
        if (map[A[i]] !== undefined) {
            const otherIndex = map[A[i]];
            res.push([otherIndex, i]);
        } else {
            map[div] = i;
        }
    }
    return res; // [[0,5], [3,6]]
}