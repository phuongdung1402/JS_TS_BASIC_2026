//null và undefined
//undefined: chưa đc định nghĩa, trạng thái mặc định mà do chính JS gán cho biến của bạn khi bạn bỏ quên
//null : trống rỗng, vô giá trị -> trạng thái do con người chủ động gán vào

//Khi nào thì gặp undefined:
//1.khai báo biến nhưng quên chưa gán giá trị
// let hoTen
// console.log(hoTen);

// //2.truy cập thuộc tính ko tồn tại của object
// const user = {name: "Neko"}
// console.log(user.age);

// //3.hàm ko return gì cả
// function chaoHoi() {
//     console.log("Xin chào");
// }
// const ketQua = chaoHoi()
// console.log(ketQua);

//4.tham số hàm ko đc truyền vào
// function tinhTong(a,b) {
//     console.log('a = ', a);
//     console.log('b = ', b);
//     return a+b
// }
// tinhTong(3)

//5.truy cập phần tử mảng vượt quá chỉ số
// const danhSach = ["meo", "cho", "ga"]
// console.log(danhSach[1]);
// console.log(danhSach[3]);
//QUY TẮC VÀNG 
//Nếu thấy undefined xuất hiện thì 99% là do mình quên gì đó: gán biến, return,gõ sai tên thuộc tính,...

//Trường hợp null
//Ngược lại với undefined : null luôn là hành động có ý thức của lập trình viên
//Có thể hiểu là , khởi tạo 1 biến sẽ chứa object sau này, nhưng chưa có dữ liệu
//tôi biết là biến này sẽ chứa object , nhưng hiện tại là chưa đăng nhập
// let nguoiDungHienTai = null
// nguoiDungHienTai = {name: "neko"}
// console.log(nguoiDungHienTai);

// let nguoiDungHienTai2 = undefined;
//gán như vậy code vẫn chạy nhưng thực tế ngta ít chủ động gán undefined vì ý nghĩa đọc code ko rõ bằng null

// let userA;
// let userB = undefined;
// let userC = null;

//undefined thường mnag ý nghĩa chưa đc gán, bị thiếu hoặc có thể quên
//null là đã kiểm soát rồi nhưng cố tình ko có giá trị

//Sử dụng typeof
// console.log(typeof undefined); // undefined
// console.log(typeof null);  // object

// if(typeof nguoiDung === 'object') -> có thể là null
// if(nguoiDung === null) {console.log('chưa đăng nhập');}
// if(nguoiDung === undefined) {console.log('chưa đc khai báo');}
















