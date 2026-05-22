// let orderNumber = 5;
// console.log(`SP-${String(orderNumber).padStart(5,0)}`);

// let sanpham = 'iphone 18'
// let gia = '1000$'
// console.log(sanpham.padEnd(20,'.')+gia);

//Method chaining
// let text = " Playwright basic first test "
// const result = text.trim().toLowerCase().replaceAll(' ','-')
// console.log(result);
// Method chaining : gọi nhiều method liên tiếp trên cùng 1 giá trị -> bước sau lấy chính kết quả đó làm đầu vào
// let amount = 9.5;

// let display = amount.toFixed(2).padStart(6, "0")
// console.log(display);

// toLocaleString() : Hãy hiển thị số này theo thói quen của 1 quốc gia /ngôn ngữ cụ thể
// Ví dụ : so.toLocaleString(locale, options)

// let price = 54000000
// console.log(price.toLocaleString('vi'));

// let moneyText = price.toLocaleString("vi-VN", {
//     style: "currency",
//     currency: "VNĐ"
// })
// console.log(moneyText);


//slice 
// let text = "ABCDEFGH"
// console.log(text.slice(1,-2));

//TOÁN TỬ (OPERATOR)
//Phép cộng : đây là phép tính có tính chất lưỡng cực. Nếu cả 2 là số : nó sẽ làm toán. nếu 1 trong 2 là chuỗi , nó sẽ là nối chuỗi

//Phép trừ : JS luôn cố gắng ép kiểu chuỗi thành số khi gặp dấu trừ

//NAN : Not a number

//Phép nhân, phép chia : tương tự phép trừ
//Phép chia lấy dư (%)  : trả về phần dư của phép chia . Ví dụ ( 10%3=1 , 10%2=0)
//-> Dùng để check các số là lẻ hay chẵn

//Toán tử gán : Dùng dấu = : quy tắc từ phải sang trái
//let diemSo = 10

//Toán tử gán rút gọn
// x = x + 5

// let tongTien = 0
// const giaAo = 25000
// tongTien+=giaAo
// const giaQuan = 30000
// tongTien+=giaQuan
// console.log(`Tổng hóa đơn : ${tongTien}`);

//Toán tử so sánh
//let passwordLength = 5

// let isPasswordValid = passwordLength >= 8
// console.log(isPasswordValid);

//Lớn hơn : > 
//Nhỏ hơn : <
//Lớn hơn/ nhỏ hơn hoặc bằng : > = || < =

//Bằng nhau == với bằng nhau tuyệt đối ===
//1.Toán tử == (so sánh lỏng lẻo) : nó chỉ quan tâm giá trị , ko quan tâm đến kiểu dữ liệu. Nên nếu kiểu dữ liệu khác nhau, nó
//sẽ tự động ép kiểu để cố gắng cho chúng bằng nhau

//2.Toán tử === (so sánh nghiêm ngặt) : Nó kiểm tra cả giá trị lẫn kiểu dữ liệu

// let giaUI = "50000"
// let giaMongDoi = 50000

//Toán tử logic
//1.Phép Và (&& - logic and) : chỉ trả về true khi tất cả điều kiện là true, chỉ cần 1 cái false -> false
//2.Phép Hoặc (|| - logic hoặc) : chỉ trả về true nếu có ít nhất 1 điều kiện là true, nó chỉ trả về false khi tất cả điều kiện là false
//3.Phép Phủ Định (! - logic not) : đảo ngược giá trị boolean, đang true thì thành false hoặc ngược lại

// let userAge = 20
// let passwordInput = 'Neko1234'
// let isTermAccepted = true

// let isAgeValid = userAge >=18
// let isPasswordValid = passwordInput.length === 8

// let isSubmitButtonEnable = isAgeValid && isPasswordValid && isTermAccepted
// console.log(isSubmitButtonEnable);

//Toán tử tăng/ giảm (prefix và post fix)
//Cú pháp : postfix (i++) : trả về giá trị cũ của i , sau đó mới tăng i lên 1
//prefix (++i) : tăng i lên 1 trước, rồi mới trả về giá trị mới

//postfix
// let a = 5;
// let ketQua = a++
// console.log(ketQua);
// console.log(a);

//prefix
// let b = 5;
// let ketQua2 = ++b
// console.log(ketQua2);
// console.log(b);

// let x = 5
// console.log(x++);
//LƯU Ý KHI DÙNG ++ / -- :
//Khi dùng ++ / -- đứng 1 mình trên 1 dòng riêng biệt, nó hoàn toàn vô hại, prefix và postfix nó đều cho kết quả giống nhau
//Ý chính khi code : 1 dòng chỉ nên làm 1 việc chính , phép tính riêng , gán giá trị riêng

// let i = 3
// let result = i++ * 2
// console.log(result);
// console.log(i);


// let retries = 2

// let firstLog = retries++

// let secondLog = ++retries

// let canRetry = retries-- > 3
// console.log(firstLog);
// console.log(secondLog);
// console.log(canRetry);
// console.log(retries);

// Bài tập
//mình có 1 promotion -> Rule: Nếu KH > 18 tuổi và là thành viên VIP, thì đc giảm 30% giá vé. ngc lại vẫn giữ nguyên
let rawAge = " 25 tuổi";
let rawisVIP = "true";
let rawTicketPrice = "  500.000 đ ";
//yêu cầu
// 1. làm sạch và ép kiểu
// 2. kiểm tra điều kiện. Nếu đủ tính giá sau giảm 30% -> nếu ko giữ nguyên
// 3. in kết quả

//let rawAgeFixed = parseInt(rawAge)
let rawIsVIPFixed = rawisVIP.trim() === 'true'
console.log(rawIsVIPFixed);

// let rawTicketPriceFixed = parseInt(rawTicketPrice.trim().replaceAll('.',''))
// if(rawAgeFixed > 18 && rawIsVIPFixed) {
//     console.log(`Gía ${rawTicketPriceFixed - (rawTicketPriceFixed * 30 / 100)}`);
// } else {
//     console.log(`${rawTicketPriceFixed}`);
// }






