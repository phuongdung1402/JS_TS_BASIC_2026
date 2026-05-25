//OOP & Class
//Class : nhà máy đúc khuôn , bản vẽ thiết kế
//object : instance/ thực thể
//Cú pháp cốt lõi : 1 class sẽ có 2 thành phần chính : thuộc tính, phương thức
//Tên class sẽ bắt buộc phải viết hoa chữ đầu tiên (pascalCase) để phân biệt vs các biến. (HocVien, LoginPage, ShoppingCart)

//Thuộc tính khai báo trong class
//Có 2 cách viết để khai báo thuộc tính trong class
//C1 : gắn trong constructor() -> this.ten =giat tri (nằm trong hàm constructor(), khi nào dùng : khi giá trị phụ thuộc vào tham số truyền vào)
//C2 : Class field : khai báo thuộc tính bên ngoài constructor() -> ten= giaTri (ko cần this) .Ngay đầu class trc constructor,
//khi giá trị cố định , ko thay đổi theo object

//Nguyên tắc vàng : Mọi thuộc tính đều nên khai báo ở class field trước. constructor chỉ dùng để gán lại giá trị cho những thuộc tính cần nhận tham số từ bên ngoài
//Nếu class ko cần nhận tham số, ko cần gán lại giá trị , ko cần chạy logic khởi tạo thì có thể bỏ constructor()


//Constructor() - Trái tim class
//Nó là 1 hàm đặc biệt trong class, có đặc điểm:
//1 . tự động chạy : nó đc JS chạy ngay lập tức mỗi khi bạn dùng từ khóa new để tạo obj mới -> ko bh phải gọi bằng tay
//2. 1 class Chỉ có duy nhất 1 hàm constructor
//Nhiệm vụ chính : gán lại giá trị ban đầu cho các thuộc tính (this...xxx) của object đang đc tạo ra.


//PHƯƠNG THỨC (Method) : Hành động của object
//Chta sẽ có những hàm để miêu tả hành động mà obj thực hiện khi đc tạo ra từ class
//this : sử dụng trong method chính là obj hiện tại (tham chiếu bài cũ)
//Có 2 cách viết method : method thường , arrow function

// class HocVien {
//     //B1 : KHAI báo tất cả thuộc tính ở class field
//     hoTen = "";
//     tuoi = 0;
//     truongHoc = "Neko playwright";
//     trangThai = "Đang học"

    //mọi thuộc tính đều nằm trong constructor
    //B2: Constructor chỉ gán lại cho thuộc tính cần giá trị động
//     constructor(ten, tuoi) {
//         this.hoTen = ten;
//         this.tuoi = tuoi
//     }

//     gioiThieu() {
//         console.log(`${this.hoTen}, ${this.tuoi} tuoi, truong: ${this.truongHoc}`);
//     }

//     gioiThieuArrow = () => {
//          console.log(`${this.hoTen}, ${this.tuoi} tuoi, truong: ${this.truongHoc}`);
//     }
// }
//Luồng tạo 1 object từ class:
//B1 : Lệnh new sẽ tạo ra 1 obj rỗng {} và gán this cho nó
//B2 : Class field chạy trc -gán giá trị cố định vào obj
//B3 : Constructor chạy sau, gán lại giá trị động từ tham số truyền vào

//C1 :constructor có tham số
// let hv1 = new HocVien("Neko", 30)
// hv1.gioiThieu()
// console.log(hv1.trangThai);
// console.log(hv1.truongHoc);

// let hv2 = new HocVien("Neko2", 31)
// hv2.gioiThieu()

// //C2 : Constructor có giá trị mặc định(default parameters)
// class TestConfig {
//     //B1
//     browser = "Chromium";
//     timeout = 5000;

//     constructor(browser="Chromium", timeout= 5000) {
//         this.browser = browser;
//         this.timeout = timeout
//     }
// }

// let config1 = new TestConfig()
// let config2 = new TestConfig("firefox")
// let config3 = new TestConfig("webkit", 1000)

//C3 : Constructor ko tham số - dùng class field thuần
//Khi mọi obj đều có chung thuộc tính cố định, ko cần constructor luôn, chỉ class field là đủ

// class LoginPage {
//     //
//     url = 'https://nekosensei.com/login';
//     txtEmail = '#email';
//     btnSubmit = "button[type=submit]"
// }

// let trang = new LoginPage()
// console.log(trang.url);
// console.log(trang.txtEmail);

//Phương thức
//1.method thường: this phụ thuộc vào ai gọi . Bộ nhớ : dùng chung 1 bản cho mọi obj(tiết kiệm)
//kế thừa : class con có thể override
//2.arrow func : this -luôn khóa cứng vào obj (ko bao giờ lạc). Bộ nhớ : mỗi obj tạo ra 1 bản riêng (tốn hơn)
//kế thừa : class con ko thể override

//Quy tắc đơn giản : Mặc định luôn dùng method thường. Chỉ dùng arrow khi mình biết chắc chắn method đó sẽ bị tách ra khỏi obj
//để truyền vào hàm khác (callback)
// class ViDu {
//     //method thường - shorthand (khuyến nghị sử dụng)
//     chaoHoi() {

//     }

//     //arrow function gán vào class field
//     tamBiet = () => {

//     }
// }





//Từ khóa this trong class
//TH1 : this ở trong constructor => Chính là obj đang được tạo
// class HocVien3 {
//     hoTen =""

//     constructor(ten) {
//         //this = Obj mới đang đc lệnh new tạo ra
//         this.hoTen = ten
//         console.log(this);
//     }
// }

// let hv = new HocVien3("neko3")
//console.log(hv);

//TH2 : this trong method -> object đang gọi method đó
// class LoginPage2 {
//     url = "/login";

//     moTrang() {
//         //this = Obj đang đứng trc dấu chấm
//         console.log(`Mo trang ${this.url}`);
//     }
// }
// let trang2 = new LoginPage2()
// trang2.moTrang();

//TH3 : This bị mất khi nó nằm trong callback(hàm thường)
// class Dashboard {
//     tieuDe = "trangChu";
//     taiDuLieu() {
//         //callback func (hàm thường bên trong - mất this)
//         setTimeout(()=> {
//             //this ko còn là dashboard nữa
//             console.log(this.tieuDe);
//         }, 1000)
//     }
// }

// let dash = new Dashboard()
// dash.taiDuLieu()
// class GioHangDemo {
//     tenCuaHang = "neko shop";
//     sanPham = ["Tra sua", "Ca phe"]

//     inHoaDon() {
//         //Arrow func ko có this riêng , tìm ra this bên ngoài
//         this.sanPham.forEach( (sp) => {
//             console.log(`${this.tenCuaHang}: ${sp}`);       
//         })
//     }
// }

// let gioHang1 = new GioHangDemo()
// gioHang1.inHoaDon()

//this ở arrow function -> nó mượn this ở bên ngoài (lexical this)
//Tách method

// class CheckoutPage {
//     url = "/checkout";
//     moBangHamThuong () {
//         console.log(`Mở ${this.url}`);
//     }

//     //Hàm arrow
//     moBangArrow = () => {
//         console.log(`Mở ${this.url}`);
//     }
// }

// let checkout = new CheckoutPage();
// checkout.moBangHamThuong()
// checkout.moBangArrow()

//Tách method ra khỏi instance
// let hamThuongBiTach = checkout.moBangHamThuong;
// let hamArrowBiTach = checkout.moBangArrow;

// hamArrowBiTach();
// hamThuongBiTach();

// function truyenVaoCallBack(callback) {
//     callback()
// }

//truyenVaoCallBack(hamThuongBiTach)
//truyenVaoCallBack(hamArrowBiTach)


//-> Arrow function giải quyết đc hết các vấn đề của chúng ta ? thì có nên dùng arrow function cho tất cả method của class hay ko 
//-Ko nên 
//Điểm mấu chốt : arrow trong class field : khóa this theo object đc tạo ra bởi new. Khi tạo ra nhiều instance , thì JS sẽ tạo ra 
// từng hàm arrow mới cho từng instance
//Method thường: nằm trên prototype, tức là nằm trong "kho method chung" của class . Khi tạo ra nhiều instance, gọi đến hàm thường.
// thực chất chỉ là 1 hàm thường 
//-> Tùy thuộc vào bản chất của method để lựa chọn viết hàm arrow :
//1. Nếu viết hàm thường có logic sử dụng callback : thì 100% viết hàm arrow
//2. Nếu hàm đó muốn tách ra, để truyền vào callback khác : thì hàm đấy viết bằng arrow
//-> Còn lại các TH khác sẽ viết bằng hàm thường

//BT: Tạo 1 class tên là ProductPage cho trang sản phẩm vs thuộc tính :
//txtTenSP = '#productName'
//txtGia = '#price'
//btnGioHang = '#btnCart'
//modalThongBao = '.notification'
//method themSanPham(ten, gia) -> in ra gõ tên gõ giá click thêm giỏ hàng
//method kiemTraThongBao() : in ra modal thông báo
//flowMethod thucHienThemVaKiemTra(ten, Gia) : gọi 2 hàm trên

// class ProductPage {
//     txtTenSP = '#productName';
//     txtGia = '#price';
//     btnGioHang = '#btnCart';
//     modalThongBao = '.notification'

//     themSanPham(ten, gia) {
//         console.log(`Đã thêm sản phẩm ${this.txtTenSP} : ${ten} - Có giá ${this.txtGia} : ${gia} - Click : ${this.btnGioHang}`);
//     }

//     kiemTraThongBao() {
//         console.log(`Hiển thị modal thông bao: ${this.modalThongBao}`);
//     }

//     thucHienThemVaKiemTra(ten, gia) {
//         this.themSanPham(ten, gia);
//         this.kiemTraThongBao();
//     }
// }
// let product1 = new ProductPage();
// product1.themSanPham('Tra sua', 50000);
// product1.kiemTraThongBao();
// console.log('=================');
// product1.thucHienThemVaKiemTra('Cà phê', 45000);