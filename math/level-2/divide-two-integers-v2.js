/**
 * Works, used subtraction instead of sum
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }
    let negative = 0;
    if (dividend < 0) {
        negative += 1;
    }
    if (divisor < 0) {
        negative += 1;
    }
    dividend = dividend > 0 ? dividend : -dividend;
    divisor = divisor > 0 ? divisor : -divisor;
    if (divisor === 1) {
        return negative === 1 ? -dividend : dividend;
    }
    let quotient = 0;
    while (dividend >= divisor) {
        dividend -= divisor;
        quotient += 1;
    }
    return negative === 1 ? -quotient : quotient;
};