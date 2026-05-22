//Rẽ nhánh kịch bản - if/else
//Syntax:
//if(đk đúng) {
//làm việc A
//}else {
// làm việc B}
//đk : là 1 biểu thức trả về true/false


// let password = "123456";
// if(password.length >= 6) {
//     console.log('Password hợp lệ');
// } else {
//     console.log('Password ko hợp lệ');
// }

// let age = 20
// let hasTicket = true

// if(age > 18 && hasTicket) {
//     console.log('Được vào');
// }

// let canEnter = age >=18 && hasTicket
// if(canEnter) {
//     console.log('Được vào');
// }

// //Ứng dụng 
// let successMessage ='Đăng nhập thành công'
// if(successMessage === 'Đăng nhập thành công!') {
//     console.log('TEST PASS: Người dùng được vào trang chủ');
// } else {
//     console.log('TEST FAIL : Hiển thị sai thông báo hoặc đăng nhập thất bại');

// }
// //Cấu trúc : if / else if / else

// let score = 95
// if(score>=50) {
//     console.log('Đậu');
// } else if(score>90) {
//     console.log('SX');
// }

// let statusCode = 404
// if(statusCode === 200) {
//     console.log('API hoạt động OK');
// } else if (statusCode === 400) {
//     console.log('Lỗi dữ liệu gửi lên (Bad request )');
// } else if (statusCode === 404) {
//     console.log('Không tìm thấy đường dẫn, not found');
// } else {
//     console.log('Server đang gặp lỗi');
// }

// let loginStatus = 'locked'
// if(loginStatus === 'success') {
//     console.log('TEST PASS: LOGIN THÀNH CÔNG');
// } else if (loginStatus === 'locked') {
//     console.log('TK bị khóa');
// } else {
//     console.log('TEST FAIL : Login thất bại');
// }

// //Toán tử 3 ngôi - Lối tắt của if else
// //Syntax : let bien = điều kiện  ? giá trị nếu đúng : giá trị nếu sai
// //dấu ? mang ý nghĩa hỏi xem đk đúng hay sai
// //dấu : mang ý nghĩa ngăn cách giữa đúng với sai 

// let diem = 8
// let trangThai = diem > 5 ? 'PASS' : 'FAIL'
// console.log(trangThai);
//Best Practice : Khi nào ưu tiên toán tủ 3 ngôi , khi bạn chỉ cần chọn 1 giá trị, bài toán có 2 kết quả 

// let isSaving = true
// let buttonText = isSaving ? 'Đang lưu' : 'Lưu'

// let isCI = false
// let reportMode = isCI ? 'html' : 'list'

// let hasBug = true
// let statusLabel = hasBug ? 'Có bug' : 'Ổn'


// let failedTests = 2
// let suiteStatus = failedTests === 0 ? 'PASS' :failedTests <= 2 ? 'WARNING' : 'FAIL'


// if(failedTests === 0) {
//     suiteStatus = 'PASS'
// } else if(failedTests <= 2) {
//     suiteStatus = 'WARNING'
// } else {
//     suiteStatus = 'FAIL'
// }


//Truthy và Falsy
//Nếu bạn đưa vào 1 string, number, obj ... nó thường ko báo lỗi ngay, thay vào đó nó sẽ làm 1 bước ngầm gọi là ép kiểu
//QUY TẮC :
//Những giá trị mang năng lượng tiêu cực, trống rỗng, vô nghĩa -> bị ép thành false -> gọi là falsy
//còn tất cả những thứ còn lại -> bị ép thành true -> truthy
//List 6 Falsy: 
//false
//0 ( số 0)
//"" ( chuỗi rỗng)
//null (rỗng)
//undefined ( chưa xác định)
//NAN ( lỗi số học )
// Tất cả điều kiện khác được coi là truthy

//Object / array
//[] : 1 cái mảng rỗng -> truthy
//{} : 1 cái object rỗng -> truthy

// let githubLink = ""
// if (githubLink) {
//     console.log('User đã upload github link');
// } else {
//     console.log('Chưa upload');
// }

// let rawUserName = "             "

// if (rawUserName.trim()) {
//     console.log('rawUserName hợp lệ');
// } else {
//     console.log('rawUserName Không hợp lệ');
// }

//Switch case 
//Hoạt động y như 1 máy bán nc tự động 
//Cú pháp : switch (biểu thức ): nơi bạn truyền vào biến cần kiểm tra
//case giá trị : điểm dừng
//break: lệnh ngắt ( thoát khỏi switch)
//default : giống

//Nếu ko có break : nó sẽ chạy vào case đầu tiên khớp , sau đó nó sẽ chạy hết vào các case bên dưới, mà ko kiểm tra điều kiện

let role = "admin"
switch (role) {
    case "admin":
        console.log('Cấp quyền truy cập vào toàn bộ hệ thống');
        break;

    case "editor":
        console.log('Cấp quyền chỉnh sửa');
        break;

    default:
        console.log('Lỗi role ko hợp lệ');
}

//dùng if else khi đk đa dạng, phức tạp (> , < , >= , <=) , điều kiện lồng nhau, nhiều biến
//dùng switch case khi có 1 biểu thức duy nhất trong switch , rồi mỗi case là 1 giá trị cố định để so khớp
//Nói ngắn gọn : switch ko mạnh ở điều kiện logic mà mạnh ở so khớp nhiều giá trị cố định của 1 biến hay 1 biểu thức

































