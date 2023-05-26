const friends = ['Dat', 'nguyen', 'minh', 'nam', 'Hau'];

friends.push('Van'); // push = thêm vào cuối array

friends.unshift('Dang'); // unshift = thêm vào đầu của array

friends.pop(); // Xóa bỏ phần tử cuối cùng trong 1 array .
//không cần truyền thêm đối số vì nó tự xác định được đâu là phần tử cuối cùng

console.log(friends.pop()); // trả về phần tử cuối cùng đang có trong mảng

friends.shift(); // Xóa bỏ phần tử đầu tiên trong 1 array .
//không cần truyền thêm đối số vì nó tự xác định được đâu là phần tử cuối cùng

console.log(friends.shift()); // trả về phần tử đầu tiên đang có trong mảng
console.log(friends);

console.log(friends.indexOf('nguyen')); // Show index của phần tử trong array

console.log(friends.includes('nguyen')); // Kiểm tra có chứa phần tử trong array hay không ?
