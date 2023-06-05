/**
 * Time limit exceeded
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = new Array();
    const chars = s.match(/([0-9]+)|([+\-\*\/]+)/g);
    while (chars.length) {
        const char = chars.shift();
        if (/[0-9+]/.test(char)) {
            stack.push(char);
        } else if (/[-]/.test(char)) {
            const nextChar = chars.shift();
            stack.push('+');
            stack.push(`-${nextChar}`);
        } else if (/\*|\//.test(char)) {
            const right = Number.parseFloat(chars.shift());
            const left = Number.parseFloat(stack.pop());
            let result;
            if (char === '*') {
                result = left * right;
            } else {
                result = left / right;
                if (result < 0) {
                    result = -Math.floor(Math.abs(result));
                } else {
                    result = Math.floor(result);
                }
            }
            stack.push(result);
        }
    }
    while (stack.length > 1) {
        const right = Number.parseFloat(stack.pop(), 10);
        const op = stack.pop();
        const left = Number.parseFloat(stack.pop(), 10);
        let result;
        if (op === '+') {
            result = left + right;
        } else {
            result = left - right;
        }
        stack.push(result);
    }
    return stack.pop();
};