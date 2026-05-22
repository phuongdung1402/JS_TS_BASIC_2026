

// class HocVien3 {
//     hoTen =""

//     constructor(ten) {
//         this.hoTen = ten
//         console.log(this);
//     }
// }

// let hv = new HocVien3("ten")
// //console.log(hv);


// class LoginPage {
//     url = "/login";

//     moTrang() {
//         console.log(`Mo trang ${this.url}`);
//     }
// }
// let trang2 = new LoginPage()
// trang2.moTrang();

// //TH3 : This bị mất khi nó nằm trong callback

// class Dashboard {
//     tieuDe = "trangChu"

//     taiDuLieu() {
//         setTimeout(function () {

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
//         this.sanPham.forEach( (sp)=> {
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

//let hamThuongBiTach = checkout.moBangHamThuong;
// let hamArrowBiTach = checkout.moBangArrow;

// hamArrowBiTach();
//hamThuongBiTach();

//-> Arrow function giải quyết đc hết các vấn đề của chúng ta ? thì có nên dùng arrow function cho tất cả method của class hay ko 
//-Ko nên 
//Điểm mấu chốt : arrow trong class field : khóa this theo object đc tạo ra bởi new method thường: nằm trên prototype, 
//tức là nằm trong "kho method chung" của class

//BT: Tạo 1 class tên là ProductPage cho trang sản phẩm vs thuộc tính :
//txtTenSP = '#productName'
//txtGia = '#price'
//btnGioHang = '#btnCart'
//modalThongBao = '.notification'
//method themSanPham(ten, gia) -> in ra gõ tên gõ giá click thêm giỏ hàng
//method kiemTraThongBao() : in ra modal thông báo
//flowMethod thucHienThemVaKiemTra(ten, Gia) : gọi 2 hàm trên

class ProductPage {

    txtTenSP = '#productName';
    txtGia = '#price';
    btnGioHang = '#btnCart';
    modalThongBao = '.notification'

    themSanPham(ten, gia) {
        console.log(`Đã thêm sản phẩm ${this.txtTenSP} - có giá ${this.txtTenSP} - Click : ${this.btnGioHang}`);
    }

    kiemTraThongBao() {
        console.log(`Hiển thị modal thông bao: ${this.modalThongBao}`);
    }

    thucHienThemVaKiemTra(ten, gia) {
        this.themSanPham(ten, gia);
        this.kiemTraThongBao();
    }
}
let product1 = new ProductPage();
product1.themSanPham('Tra sua', 50000);
product1.kiemTraThongBao();
console.log('=================');
product1.thucHienThemVaKiemTra('Cà phê', 45000);

// 4 trụ cột của OOP ( Lập trình hướng đối tượng )
//4.1 : JS nó cho phép 1 class mới (class con) nhận lại toàn bộ thuộc tính và phương thức của 1 class đã có (class cha)
//bằng từ khóa extend và super() => tính kế thừa giúp loại bỏ hoàn toàn code trùng lặp ( DRY )
//super() : truyền tham số cho cha
//Nếu constructor của cha nhận tham số, con sẽ rơi vào vài tình huống 

class BasePage {

    header = '#thanhMenuTrenCung';

    bamNutTrangChu() {
        console.log(`Đã click nút Home trên thanh ${this.header}`);
    }

    chupManHinh(tenFile) {
        console.log(`Đã chụp màn hình và lưu thành ${tenFile}.png`);
    }
}

class LoginPage extends BasePage {
    nutDangNhap = '#loginButton';

    dienMatKhau() {
        console.log("Đã điền mật khẩu");
        this.chupManHinh("Sau khi điền pass")
    }
}

let trangDangNhap = new LoginPage()
trangDangNhap.bamNutTrangChu()
trangDangNhap.dienMatKhau()