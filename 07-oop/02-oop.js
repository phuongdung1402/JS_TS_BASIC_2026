// 4.3 Đa hình , cùng 1 lệnh nhưng có nhiều cách làm
//Định nghĩa : Đa hình cho phép class con ghi đè (override) hoặc thay đổi cách thức hoạt động của 1 phương thức mà nó nhận 

// class BasePage {
//     tenTrang = 'Trang cơ bản'
//     cuonTrang() {
//         console.log(`Dùng con lăn chuột để cuộn trang 500px`);
//     }
// }

// class MobilePage extends BasePage {
//     //Ghi đè lên hàm cha (override)
//     //cùng tên hàm  nhưng logic bên trong thay đổi

//     cuonTrang() {
//         console.log("Dùng ngón tay để vuốt màn hình");
//     }
// }

// class TabletPage extends BasePage {
//     cuonTrang() {
//         console.log("Vuốt 2 ngón tay");
//     }
// }

// let trangWeb = new BasePage();
// let trangMobile = new MobilePage();
// // trangWeb.cuonTrang()
// // trangMobile.cuonTrang()

// //Sức mạnh của đa hình : gọi cùng 1 hàm trên nhiều object khác nhau
// let danhSachTrang = [
//     new BasePage(),
//     new MobilePage(),
//     new TabletPage()
// ]

// danhSachTrang.forEach((trang)=> {
//     trang.cuonTrang()
// })
// //Ví dụ viết 1 hàm nhận bất kì class nào đều hoạt động vs class đó
// //Ví dụ tôi có 1 cái hàm chỉ biết đầu vào nhận là 1 tham số tên là trang

// function chayKiemThu(trang) {
//     console.log("Bắt đầu test");
//     trang.cuonTrang();
//     console.log("Kết thúc test");
// }

// chayKiemThu(new BasePage());
// chayKiemThu(new MobilePage());
// chayKiemThu(new TabletPage());

//Kế thừa : con nhận lại tài sản của cha
//Đa hình : cùng 1 hàm , tùy vào từng nội dung sử dụng của các class

//4.4 Trừu tượng (Abstraction)
//Định nghĩa : Trừu tượng hóa là việc che giấu đi sự phức tạp của hệ thống, chỉ phơi ra những giao diện (hàm, tính năng ) đơn
//giản nhất, dễ hiểu nhất cho user
//JS thuần ko có từ khóa abstract -> tính trừu tượng của JS chủ yếu là 1 tư duy thiết kết hợp vs tính đóng gói
