const neighbours = ['Laos', 'Campuichia', 'ThaiLand', 'China'];

neighbours.push('Utopia'); // thêm vào cuối mảng

neighbours.pop(); // xóa phần tử cuối cùng trong mảng

console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
}

const chinaDog = neighbours.indexOf('China');

console.log(chinaDog);

neighbours[chinaDog] = 'ChinaDOG';
console.log(neighbours);
