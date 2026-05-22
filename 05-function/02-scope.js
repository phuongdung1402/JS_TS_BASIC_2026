//SCOPE : Phạm vi làm việc 
//Quy định phạm vi tồn tại của 1 biến
//A. Global scope : phạm vi toàn cục
//Đặc điểm : biến được khai báo bên ngoài, ko nằm trong bất kì function nào . Trong bất cứ function nào cũng có thể truy xuất
//Nguy hiểm : các function có thể truy cập , vô tình làm thay đổi giá trị của biến toàn cục

// let tenMoiTruong = "STAGING"
// let baseUrl = "https://staging.neko.vn"

// function chayTest() {
//     console.log(`Đang chạy test trên ${tenMoiTruong}`);
//     console.log(`URL ${baseUrl}`);
// }

// function chayTestKhac() {
//     console.log(`Hàm khác cũng thấy ${tenMoiTruong}`);

// }
//B . Function scope (hàm vi phạm)
//Biến đc khai báo bên trong function : biến sẽ tồn tại trong hàm , và sẽ mất đi khi hàm chạy xong
// function taoTaiKhoan() {
//     let matKhauBaoMat = "Secret123";
//     let token = "abc-xyz"
//     console.log(`MK : ${matKhauBaoMat}`);
//     console.log(`Token : ${token}`);
// }

// taoTaiKhoan()

// function demSoLan() {
//     let count=0;
//     count++;
//     console.log(count);
// }

// //Mỗi lần gọi : count đc khởi tạo lại = 0;
// demSoLan();
// demSoLan();

//C. Block scope (phạm vi khối)
//Bất kì biến nào nằm trong ngoặc nhọn của if, for, while ,.. đều là 1 block scope
//Biến ở trong block scope chỉ hoạt động bên trong scope 

//D. Lưu ý : Object ko phạm 1 scope, vai trò hoàn toàn khác nhau. Phân biệt giữa scope và object
//scope : phạm vi biên
//object : đối tượng chứa dữ liệu , cặp value - key ( truy cập thuộc tính của object : object.thuộc tính)


//SCOPE CHAIN : Tìm từ trong ra ngoài, ko bh tìm từ ngoài vào trong
// let mau ="Đỏ"

// function ngoai() {
//     let size = "Lớn"

//     function trong() {
//         let gia = 1000;
//         console.log(gia);
//         console.log(size);
//         console.log(mau);
//     }
//     trong()
//     console.log(gia);
// }
// ngoai()
// console.log(size);


