function toss_biased() {
  var biased = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1];
  var idx = Math.floor(Math.random() * biased.length);
  return biased[idx];
}

function toss() {
  while (true) {
    const t1 = toss_biased();
    const t2 = toss_biased();
    if (t1 != t2) {
      return t1;
    }
  }
}

function main() {
  let i = 0;
  let h = 0;
  let t = 0;
  const turns = 100000;
  while (i < turns) {
    const n = toss();
    if (n === 0) h += 1;
    else t += 1;
    i++;
  }
  console.log('unbiased (heads/tails):', h / turns, t / turns);
  i = 0;
  h = 0;
  t = 0;
  while (i < turns) {
    const n = toss_biased();
    if (n === 0) h += 1;
    else t += 1;
    i++;
  }
  console.log('biased (heads/tails):', h / turns, t / turns);
}

main();
