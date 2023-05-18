/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const parts = s.split(/([+\-*/])/);
    const temp = [];
    for (let i = 0; i < parts.length; i += 1) {
        if (parts[i] === '*' || parts[i] === '/') {
            const op = parts[i];
            const left = Number.parseFloat(temp.pop());
            i += 1;
            const right = Number.parseFloat(parts[i]);
            let result;
            if (op === '*') {
                temp.push(left * right);
            } else {
                temp.push(Math.floor(left / right));
            }
        } else {
            temp.push(parts[i]);
        }
    }
    let result = Number.parseFloat(temp[0]);
    for (let i = 1; i < temp.length; i += 1) {
        const curr = temp[i].trim();
        if (curr === '+' || curr === '-') {
            i += 1;
            const right = Number.parseFloat(temp[i]);
            if (curr === '+') {
                result += right;
            } else {
                result -= right;
            }
        }
    }
    return result;
};