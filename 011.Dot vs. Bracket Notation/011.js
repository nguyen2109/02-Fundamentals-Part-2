const nguyenObj = {
  name: 'Nguyên',
  age: 21,
  phone: '0559595165',
  country: 'VN',
  friends: ['Dat', 'minh', 'hau'],
};

console.log(nguyenObj['name']);
console.log(nguyenObj.name);
//đều ra kết quả là 'Nguyên'

nguyenObj.someThings = 'Best'; // có thể thêm thoải mái vào
nguyenObj['someThings2'] = 'Yeah';
console.log(nguyenObj);
