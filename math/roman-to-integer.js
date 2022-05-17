/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  const size = s.length;
  let number = 0;
  for (let i = 0; i < size; i += 1) {
      if (s[i] === 'I') number += 1;
      if (s[i] === 'V') number += 5;
      else if (s[i] === 'X') number += 10;
      else if (s[i] === 'L') number += 50;
      else if (s[i] === 'C') number += 100;
      else if (s[i] === 'D') number += 500;
      else if (s[i] === 'M') number += 1000;
  }
  if (/IV/.test(s)) number -= 2;
  if (/IX/.test(s)) number -= 2;
  if (/XL/.test(s)) number -= 20;
  if (/XC/.test(s)) number -= 20;
  if (/CD/.test(s)) number -= 200;
  if (/CM/.test(s)) number -= 200;
  return number;
};