//Viết hàm có tên 'describeCountry' nhận ba tham số: 'quốc gia', 'dân số' và 'thủ đô'.
// Dựa trên đầu vào này, hàm trả về một chuỗi có định dạng sau:
//'Phần Lan có 6 triệu người và thành phố thủ đô của nó là Helsinki'

function describeCountry(country, population, capitalCity) {
  const result = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return result;
}

//Call this function 3 times, with input data for 3 different countries. Store the
//returned values in 3 different variables, and log them to the console

console.log(describeCountry('Viet Nam', 94.47, 'Ha Noi'));
