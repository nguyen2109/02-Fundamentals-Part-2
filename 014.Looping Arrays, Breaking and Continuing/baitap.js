for (let i = 1; i < 51; i++) {
  //console.log(`Cử tri số ${[i]} đang bỏ phiếu`);
}

function percentageOfWorld1(population) {
  const result = (population / 7900) * 100;
  return result;
}

const populations = [1111, 2221, 3331, 4441];

const percentages2 = [];

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

for (let i = 0; i < populations.length; i++) {
  percentages2[i] = percentageOfWorld1(populations[i]);
}
console.log(percentages2);
