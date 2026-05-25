
// 4 trụ cột của OOP ( Lập trình hướng đối tượng )
//4.1 : Kế thừa
// JS nó cho phép 1 class mới (class con) nhận lại toàn bộ thuộc tính và phương thức của 1 class đã có (class cha)
//bằng từ khóa extend và super() 
//Tính kế thừa giúp loại bỏ hoàn toàn code trùng lặp ( DRY )
//super() : truyền tham số cho cha
//Nếu constructor của cha nhận tham số, con sẽ rơi vào vài tình huống 

// class BasePage {
//     header = '#thanhMenuTrenCung';

//     bamNutTrangChu() {
//         console.log(`Đã click nút Home trên thanh ${this.header}`);
//     }

//     chupManHinh(tenFile) {
//         console.log(`Đã chụp màn hình và lưu thành ${tenFile}.png`);
//     }
// }

// //Kế thừa : extends
// class LoginPage extends BasePage {
//     nutDangNhap = '#loginButton';

//     dienMatKhau() {
//         console.log("Đã điền mật khẩu");
//         this.chupManHinh("Sau khi điền pass")
//     }
// }

// let trangDangNhap = new LoginPage()
// trangDangNhap.bamNutTrangChu()
// trangDangNhap.dienMatKhau()


//super() : truyền tham số cho cha
//Nếu constructor của cha nhận tham số, con sẽ rơi vào vài tình huống 
//TH1 : Không cần truyền gì , ko cần viết constructor con
//Khi class cha ko cần dữ liệu bên ngoài, hoặc cha có constructor nhưng k nhận tham số , con thường ko cần viết gì nữa (giống ví dụ bên trên)

//TH2 : Con truyền giá trị cố định lên cho cha
// class BasePage {
//     url="";
//     constructor(url) {
//         this.url = url
//     }

//     moTrang() {
//         console.log(`Mở trang ${this.url}`)
//     }
// }

// //Kế thừa : extends
// class LoginPage extends BasePage {
//     nutDangNhap = '#loginButton';

//     constructor() {
//         super("/login")
//     }
// }

// let login = new LoginPage()
// login.moTrang()

//TH3 : Con nhận 1 tham số -> truyền tham số lên cho cha
// class BasePage {
//     url="";
//     constructor(url) {
//         this.url = url
//     }

//     moTrang() {
//         console.log(`Mở trang ${this.url}`)
//     }
// }

// class Login extends BasePage {
//     nutDangNhap = '#loginButton';
//     constructor(url) {
//         super(url)
//     }
// }

// let login3 = new Login("/login")
// login3.moTrang()

class BasePage {
    url=""

    navigateToUrl() {
        console.log(`Navigate to URL page : ${this.url}`)
    }
}

class LoginPage extends BasePage {
    title = '#title';
    footer = '#footer';
    btnLogin = '#btnLogin'
    constructor(title, footer, btn) {
        super();
        this.title = title;
        this.footer = footer;
        this.btnLogin = btn
    }

    login() {
        console.log(`Website : ${this.title}- Footer : ${this.footer} - LoginButton : ${this.btnLogin}`)
    }
}


let loginPage = new LoginPage('Welcome', 'The end', 'Click me!')
loginPage.login()




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
