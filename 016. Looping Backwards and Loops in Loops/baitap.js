const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let inArray = 0; inArray < listOfNeighbours[i].length; inArray++) {
    console.log(`👉 Neighbour : ${listOfNeighbours[i][inArray]}`);
  }
}
