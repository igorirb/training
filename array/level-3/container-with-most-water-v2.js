/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const n = height.length;
    let maxArea = 0;
    let left = 0;
    let right = n - 1;
    while (left < right) {
        const hLeft = height[left];
        const hRight = height[right];
        const area = (right - left) * Math.min(hLeft, hRight);
        if (area > maxArea) {
            maxArea = area;
        }
        if (hLeft < hRight) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return maxArea;
};