/**
 * Time limit exceeded
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let quotient = 0;
    if (Math.abs(divisor) > 1) {
        for (let i = 1; i <= Math.abs(dividend); i += 1) {
            let curSum = 0;
            for (let j = 0; j < Math.abs(divisor); j += 1) {
                curSum += i;
            }
            if (
                (Math.abs(dividend) - curSum < Math.abs(divisor))
                && curSum <= Math.abs(dividend)
            ) {
                quotient = i;
                break;
            }
        }
    } else {
        quotient = dividend > 0 ? dividend : -dividend;
    }
    if ((dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0)) {
        return Math.min(quotient, 2147483647);
    }
    return -quotient;
};