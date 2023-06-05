/**
 * Time limit exceeded
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [];
    const chars = s.match(/([0-9]+)|([+\-\*\/]+)/g);
    while (chars.length) {
        const char = chars.shift();
        if (char === '-') {
            const nextChar = chars.shift();
            stack.push('+');
            stack.push(-nextChar);
        } else if (char === '*' || char === '/') {
            const right = Number.parseInt(chars.shift(), 10);
            const left = stack.pop();
            let result;
            if (char === '*') {
                result = left * right;
            } else {
                result = left / right;
                let signal = 1;
                if (result < 0) {
                    signal = -1;
                }
                result = signal * Math.floor(Math.abs(result));
            }
            stack.push(result);
        } else if (char === '+') {
            stack.push(char);
        } else {
            stack.push(Number.parseInt(char, 10));
        }
    }
    while (stack.length > 1) {
        const right = stack.pop();
        const op = stack.pop();
        const left = stack.pop();
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