function addCommas(num) {
  let sign = '+';
  if (num < 0) {
    sign = '-';
    num = Math.abs(num);
  }
  let str = String(num);
  let count = 1;
  res = '';
  for (let i = str.length - 1; i >= 0; i--) {
    res = str[i] + res;
    if (count % 3 === 0) res = ',' + res;
    count++;
  }
  if (sign === '-') res = sign + res
  return res;
}

module.exports = addCommas;
