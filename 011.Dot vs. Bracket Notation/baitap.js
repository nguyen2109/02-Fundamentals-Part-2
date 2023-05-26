const myCountryObj = {
  country: 'VN',
  capital: 'HN',
  language: 'Vietnam',
  population: 99999,
  neighbour: 3,
};

myCountryObj.population = myCountryObj.population + 2;
myCountryObj['population'] = myCountryObj['population'] - 2;
console.log(
  `${myCountryObj.country} có ${myCountryObj.population} người nói tiếng ${myCountryObj.language}, có ${myCountryObj.neighbour} nước láng giềng và thủ đô là ${myCountryObj.capital}`,
);
