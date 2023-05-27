function percentageOfWorld1(population) {
  const result = (population / 7900) * 100;
  return result;
}

const populations = [1111, 2221, 3331, 4441];
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const res = percentageOfWorld1(populations[i]);
  percentages3.push(res);
  i++;
}
console.log(percentages3);
