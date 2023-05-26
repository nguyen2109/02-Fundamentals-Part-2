const myCountryObj = {
  country: 'VN',
  capital: 'HN',
  language: 'Vietnam',
  population: 99999,
  neighbour: 3,
  describe: function () {
    return `${this.country} có ${this.population} người nói tiếng ${this.language} , có ${this.neighbour} nước láng giềng và thủ đô là ${this.capital}`;
  },
  checkIsland: function () {
    this.isIsland = `${this.neighbour === 0 ? true : false}`;
    return this.isIsland;
  },
};

console.log(myCountryObj.describe());
console.log(myCountryObj.checkIsland());
