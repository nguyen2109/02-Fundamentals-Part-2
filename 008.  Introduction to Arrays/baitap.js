function percentageOfWorld1(population) {
  const result = (population / 7900) * 100;
  return result;
}

const populations = [111, 222, 333, 444];

console.log(populations.includes(111));

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);
