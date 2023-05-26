function percentageOfWorld1(population) {
  const result = (population / 7900) * 100;
  return result;
}

function describePopulation(country, population) {
  const result = `${country} has ${population} million people, which is about ${percentageOfWorld1(
    1441,
  )} of the world`;
  return result;
}
console.log(describePopulation('China', 1441));
