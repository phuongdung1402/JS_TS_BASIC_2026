// //Vòng lặp while: trong khi
// //Logic sẽ là : trong khi điều kiện còn đúng , sẽ tiếp tục làm
// // Cú pháp : có 3 yếu tố cốt lõi 

// //let bienDem = gia_tri_ban_dau
// //while( dieu  kien lap ) {
// // Khối lệnh thực thi
// // Cập nhật biến đếm ( bước nhảy )
// //}

// //Yếu tố 1 : biến khởi tạo
// //Yếu tố 2 : Điều kiện lặp : đánh giá điều kiện ( nếu truthy -> code bên trong được chạy) , nếu falsy -> kết thúc
// //Yếu tố 3 : bước nhảy : bắt buộc phải nằm trong dấu ngoặc. Nhiệm vụ là thay đổi biến khởi tạo đến 1 thời điểm nào đó điều kiện lặp trở thành false , từ đó vòng lặp dừng lại

// //QUY TẮC VÀNG : Dùng while khi ko biết số lần lặp , nhưng biết điều kiện lặp

// //VD:
// let soLanClick = 1
// while (soLanClick <= 3) {
//     console.log(`Đang click lần thứ ${soLanClick}`);

//     soLanClick++;
// }
// console.log("Đã click xong 3 lần, thoát vòng lặp");

//Vòng lặp vô hạn
// let dieuKien = true;

// while (dieuKien === true) {
//     console.log("Làm hành động");
//     // infinite loop vòng lặp
// }

// let miengThit = 5;
// while (miengThit > 0) {
//     console.log(` Đang ăn .... Còn lại ${miengThit} mieng`);
//     miengThit--;
// }
// console.log("Đã ăn hết, no bụng");

// //Trong AT sẽ có cơ chế retry - thử lại tối đa n lần
// //Viết code tìm nút thanh toán , 1s tìm 1 lần , tìm tối đa 5 lần, nếu thấy thì dừng, nếu quá 5 lần thì báo lỗi

// let maxRetry = 5
// let currentRetry = 1
// let isFound = false

// while (isFound === false && currentRetry <= maxRetry) {
//     console.log(`Đang tìm nút thanh toán trên màn hình ... `);
//     //Gỉa lập tìm kiếm ( là cho tỷ lệ tìm kiếm < 0.8)
//     let toolGiaLap = Math.random()

//     let searchResult = toolGiaLap > 0.8
//     console.log(`Search result : ${searchResult}`);

//     if (searchResult === true) {
//         isFound = true
//         console.log("Đã tìm thấy nút thanh toán. Bấm Click");

//     } else {
//         console.log("Không thấy, chuẩn bị thử lại");
//         currentRetry++;
//     }
// }

// if (isFound === false) {
//     console.log(`TEST FAIL . Đã thử 5 lần nhưng mạng lag `);
// }

//BT : Hệ thống cho phép nhập sai MK tối đa 3 lần, nếu nhập đúng trc khi hết lượt thì hiển thị đăng nhập thành công. nếu sai -> khóa tài khoản
// let matKhauDung = "1234"
// let maxLanThu = 3
// let matKhauNhap = 0
// let soLanThu = 0
// while (soLanThu <= maxLanThu && matKhauNhap != matKhauDung) {
//     if (soLanThu === 1) {
//         matKhauNhap = "0000"
//     } else if (soLanThu === 2) {
//         matKhauNhap = "0000"
//     } else if (soLanThu === 3) {
//         matKhauNhap = "1234"
//     }

//     if (matKhauNhap === matKhauDung && soLanThu <= maxLanThu)  {
//         console.log("Đăng nhập thành công");
//     } else if (matKhauNhap != matKhauDung && soLanThu <= maxLanThu) {
//         console.log("Sai mật khẩu");
//     } else {
//         console.log("Khóa tài khoản");
        
//     }
//     soLanThu++
// }

// //Mảng ( Array )

//Array chứa toàn string (ds tk test)
// let danhSachUser = ["admin", "test_01", "user_vip"]
// //Array chứa toàn number
// let danhSachGia = [1000, 2000, 3000]

// //mảng rỗng
// let danhSachLoi = []
// //  LƯU Ý : Trong nhiều ngôn ngữ khác, array chỉ đựng 1 loại kiểu dữ liệu, nhưng js có thể chứa tạp nham các loại dữ liệu
// // Tuy nhiên : nghiêm cấm sử dụng như vậy , chúng ta thường cố gắng giữ cho dữ liệu đồng nhất để dễ xử lý

// let sanPham = ["AoThun", "AoSoMi", "MuLuoiTrai"]
// console.log(sanPham[1]);
// console.log(sanPham[2]);
// console.log(sanPham[0]);

// console.log(sanPham[10]);

//Các hàm xử lý vs Array
// 1. tenMang.length() : trả ra number là tổng số phần tử vì index = 0 nên phần tử cuối cùng của mảng luôn nằm ở vị trí length - 1

// let ketQuaTimKiem = ['iphone 12', 'iphone 13']
// console.log(ketQuaTimKiem.length);

// 2. push() : thêm phần tử vào mảng
// let danhSachLoi = []
// danhSachLoi.push("Nút đăng nhập ko bấm được")
// danhSachLoi.push("Sai màu chữ ở footer")

// console.log(danhSachLoi);

// 3.includes() - Kiểm tra phần tử có tồn tại ko
// let cacTrangThaiChoChoPhep = ['PENDING', 'APPROVED', 'SHIPPED']
// let trangThaiThucTe = 'APPROVED'
// if(cacTrangThaiChoChoPhep.includes(trangThaiThucTe)) {
//     console.log('TEST PASS : TRANG THAI HIEN THI DUNG LOGIC');
// } else {
//     console.log('TEST FAIL');
// }

// 4.pop() : rút phần tử ra khỏi mảng 
// let lichSuDuyetWeb = ["Trang chủ", "Sản phẩm", "Giỏ hàng"]
// let trangVuaThoat = lichSuDuyetWeb.pop()
// console.log(lichSuDuyetWeb);
// console.log(trangVuaThoat);

// 5.shift() : Rút phần tử đầu tiên ra ngoài
// let hangChoHoTro = ["Khach A", "Khach B", "Khach C"]
// let khachHangDuocXuLy = hangChoHoTro.shift()
// console.log(hangChoHoTro);
// console.log(khachHangDuocXuLy);

// 6.unshift() : thêm phần tử vào đầu 
// let danhSachUuTien = ["Bug Thuong", "Bug Giao Dien"]
// danhSachUuTien.unshift("BUG TO")
// console.log(danhSachUuTien);


// 7.join() : gộp tất cả các phần tử của mảng vào
// let tags = ["automation", "playwright", "javascript"]
// let tagsString = tags.join(", ")
// console.log(tagsString);

// 8.indexOf() : trả ra index nếu tìm thấy , trả ra -1 nếu ko có
// let danhSachMenu = ["Home", "About", "Services"]
// console.log(danhSachMenu.indexOf('Services'));
// console.log(danhSachMenu.indexOf('Dashboard'));


// let gioHang = ["Bàn phím cơ", "Chuột gaming", "Màn hình 27 inch", "Tai nghe bluetooth"]
// console.log(gioHang.length);
// console.log(gioHang[0]);
// console.log(gioHang[gioHang.length - 1])
// console.log(gioHang.push('Lót chuột'));
// console.log(gioHang);

//Object : là 1 cái tủ có dán nhãn -> khi mình muốn lấy 1 cái ngăn kéo -> thì lấy qua tên ngăn kéo
//Quy tắc vàng : Dùng array khi bạn có 1 danh sách nhiều thứ giống nhau (danh sách user, giá,..)
//Dùng object khi cần 1 mô tả chi tiết 1 thứ duy nhất ( 1 user, 1 sản phẩm, 1 cấu hình test)
// Cú pháp : để tạo 1 obj ta dùng dấu ngoặc nhọn {} bên trong là các cặp key value, ngăn cách bởi dấu phẩy

//Khóa key : cái tên thuộc tính ( cái nhãn dán trên ngăn kéo )
//giá trị value : đồ vật nằm trong ngăn kéo ( có thể là string, number, boolean, array, hay là 1 function)

// let userTest = {
//     hoTen: "Neko Nguyen",
//     tuoi : 30,
//     isVip : true,
//     quyenHan : ['read', 'write']
// }
// console.log(userTest);

// //quy tắc đặt tên key : key trong obj tuân theo quy tắc đặt tên. Khi ko cần dấu nháy "", nếu key là tên hợp lệ -> thì ta bỏ dấu ngoặc kép đc
// //nếu key có chứa dấu cách , dấu gạch ngang - phải bọc trong dấu ngoặc kép

// // Cách trích xuất dữ liệu : lấy theo 2 kiểu chính :
// // A. Dùng dấu chấm : cách dùng 90% : tenobject.key ( tên key k có dấu cách , dấu -)
// // B. Dùng dấu ngoặc vuông : dùng cho th còn lại ( key chứa nháy kép) - tenobject["tenkey"]

// let userTest2 = {
//     hoTen: 'Neko Nguyen',
//     email: 'neko@gmail.com'
// }
// let thongTinCanLay = "email"
// console.log(userTest2.thongTinCanLay);
// console.log(userTest2[thongTinCanLay]);

//Thêm sửa xóa (CRUD) dữ liệu 
//let config = {browser : "Chrome", timeout : 5000}

// console.log(`Ban đầu ${config}`); // ko in ra đc 
// console.log("Ban đầu : ", config);

// config.timeout = 10000;
// console.log("Sau khi sửa timeout : ", config);

// //Thêm dữ liệu ( gọi tên key chưa tồn tại + giá trị)
// config.isHeadless = true;
// console.log("Sau khi thêm isHeadless: ", config);

// //Xóa dữ liệu ( dùng từ khóa delete)
// delete config.browser
// console.log("Sau khi xóa browser", config);

//const user3 = {ten: 'neko'}
// vẫn thêm sửa xóa đc ruột bên trong, const chỉ cấm bạn gán lại cả obj bằng dấu bằng

// user3 = {ten: 'meo'} // ko gán đc
// console.log(user3); 

//user3.ten = 'mèo'
//console.log(user3);

//CÁC PHƯƠNG THỨC CỦA OBJECT
// A.Object.keys() : gom tất cả các key thành 1 mảng

//let spTiki = {id: "SP01", ten: "Bàn phím", gia: 50000}
// let danhSachKey = Object.keys(spTiki)
// console.log(danhSachKey);

// console.log(danhSachKey.includes("gia"));

// //B.Object.values() : gom tất cả giá trị thành mảng
// let danhSachValue = Object.values(spTiki)
// console.log(danhSachValue);
// console.log(danhSachValue.includes("Bàn phím"));


//C. Object.entries() : gom cả nhãn lẫn giá trị
// let danhSachCap = Object.entries(spTiki)
// console.log(danhSachCap);
// console.log(danhSachCap[0]);

//D.Object.hasOwn() : ktra key có phải của chính nó ko
//Cú pháp : Object.hasOwn(tenObject, "tênkey")

//console.log(Object.hasOwn(spTiki, "id"));

// let apiResponse = {
//     userId : 9999,
//     userName : 'neko_auto',
//     role: 'admin',
//     isActive : "yes"
// }

// console.log(Object.keys(apiResponse));
// console.log(Object.hasOwn(apiResponse, "userId"));
// console.log(Object.hasOwn(apiResponse, "email"));
// console.log(Object.hasOwn(apiResponse, "role"));

// if( typeof apiResponse.isActive !== Boolean) {
//     console.log("Warning");
// } else {
//     console.log("OKKKKKK");
// }

// let apiValueArr = Object.values(apiResponse)
// console.log(apiValueArr.includes('admin'));

// let soTruong = Object.keys(apiResponse).length
// console.log(`Số trường API trả về ${soTruong}`);
// console.log(`Có userId, ${Object.hasOwn(apiResponse, "userId")}`);

// if(typeof apiResponse.isActive !== Boolean) {
//     console.log("isActive ko đúng kiểu boolean");
// }

// let hasAdmin = Object.values(apiResponse).includes("admin")
// console.log(`Có chứa admin hay ko ${hasAdmin}`);

// //Array of Object ( mảng object )
// //Cấu trúc này đc bao bên ngoài ngoặc vuông mảng [] , bên trong chứa object {}

// let danhSachUser = [
//     {id: 2, ten: "teo", role: "User"},
//     {id: 3, ten: "teo", role: "Admin" }
// ]

//Vòng lặp for - vòng lặp có cấu trúc
//Vòng lặp for cổ điển : mạnh nhất và xuất hiện ở hầu hết mọi ngôn ngữ lập trình
//Cú pháp : for( khởi tạo, điều kiện dừng, bước nhảy){
// khối lệnh bên trong
//}

//1 khởi tạo biến đếm, chỉ chạy đúng 1 lần duy nhất
//2 điều kiện dừng : kiểm tra trc mỗi vòng , true -> chạy tiếp , false -> dừng
//3 bước nhảy : cập nhật biến đếm sau mỗi vòng, thường là i++ , i--
// 3 phần cách nhau bằng dấu ,

// for(let i = 1; i<=5 ; i++) {
//     console.log(`Đang chạy vòng thứ ${i}`);
// }

// let soLuongAccount = 3
// for(let i=1; i<=soLuongAccount;i++) {
//     let emailTest = `nguoiDung_${i}@gmail.com`
//     console.log(`Đã tạo tài khoản ${emailTest}`);
    
// }

// //Duyệt array bằng index
// let sanPham2 = ["Quần đùi", "Áo cộc", "Váy"]
// for (let i=0; i<= sanPham2.length; i++) {
//     console.log(`Sản phẩm ${i+1} : ${sanPham2[i]}`);
    
// }

// //Duyệt qua Object
// let config2 = {
//     browser: "Firefox",
//     timeout: 2000,
//     headless: true
// }

// let keys = Object.keys(config2)

// for(let i=0; i<keys.length;i++) {
//     let key = keys[i]
//     let value = config2[key]
//     console.log(`${key}: ${value}`);
    
// }

//Mô phỏng vòng lặp 1 : i=0 

// Những lỗi kinh điển hay gặp :
// let arr = ["A", "B", "C"]

// for(let i=0;i<arr.length;i++) {
//     console.log(arr[i]);
// }
// // Khi làm việc vs mảng, luôn nhớ điều kiện dừng sẽ là < arr.length , vì arr lấy từ index 0

// //BT : Tạo nhanh 5 mã đơn hàng để test màn hình quản lí đơn hàng

// let soLuongDon = 5

// for(let i=0;i<soLuongDon;i++) {
//     console.log(`Mã đơn hàng : ORDER-${i}`);
    
// }

//VÒNG LẶP FOR...OF: Chỉ dành cho array ( hoặc string ) - Không dùng cho Object
//không cần quan tâm đến index
//Cú pháp: for(let phanTu of danhSach) {
// phanTu tự động nhận giá trị của từng phần tử trong danh sách
//}

//danhSach : 1 array ( hoặc 1 string). Phần lớn dùng cho array
//phanTu : biến tạm, tự động nhận giá trị của từng phần tử trong mỗi vòng lặp

// let fruits = ["Táo", "Cam", "Ổi"]
// for(let fruit of fruits) {
//     console.log(fruit);
// }

//Các cách dùng thường gặp
//1. Duyệt array đơn giản
//2. Duyệt string 
// let matKhau = "Neko@123"

// for(let kiTu of matKhau) {
//     console.log(`Kí tự : ${kiTu}`);
// }

//3.Duyệt array of obj
// let danhSachUsers = [
//     {ten: "Neko", role: "admin"},
//     {ten: "Neko2", role:"guest"},
//     {ten: "Neko3", role: "user"}
// ]

// for(let user of danhSachUsers) {
//     console.log(`${user.ten} - Quyền : ${user.role}`);
    
// }

// let config = { browser : "Chrome", timeout : 5000}

// for(let cap of Object.entries(config)) {
//     console.log(`${cap[0]} - ${cap[1]} `); 
// }

//BT 
// let danhSachUrl = ["/login", "/dashboard", "/profile"]
// //dùng for of mỗi vòng lấy ra 1 url và in ra câu Đang kiểm tra : url 

// for (let url of danhSachUrl) {
//     console.log(`Đang kiểm tra URL : ${url}`);
// }

//VÒNG LẶP FOR IN ( Dành riêng cho Object) - Ko dùng cho array
// Nó sẽ duyệt thẳng qua từng tên thuộc tính (key) mà ko cần biến hình trc
// cú pháp : for(let key in tenObject ){}
//tenObject: obj đang muốn duyệt qua
//key : biến tạm, tự động nhận tên thuộc tính (key) trong mỗi vòng lặp

// for (let key in config) {
//     console.log(`${key} - ${config[key]}`);
// }

//Dùng vòng lặp nào cho array và object
//While : ko biết trước số lần lặp, lặp đến khi điều kiện sai
//for cổ điển : biết chính xác số lần lặp -> kiểm soát tuyệt đối biến đếm
//có array , chỉ cần giá trị -> for..of
//có array , cần cả index..-> for cổ điển
//duyệt object ... -> dùng for of + biến hình hoặc for in 

//Ví dụ:
// let products = [
//     {ten: "iphone", giá: 200000},
//     {ten: "airpods", gia: 300000},
//     {ten: "macbook", gia : 100000}
// ]

//Yêu cầu : sử dụng for of + for in để in ra tên và giá của product
//mỗi lần lặp cần có dấu --- phân cách giữa các sản phẩm ở đầu ra

// for(let product of products) {
//     for(let key in product) {
//         console.log(`${key} - ${product[key]}`);
//     }
//     console.log("----");
// }

//KEYWORD : Break và Continue
//Khi chạy vòng lặp : đôi khi mình muốn can thiệp ngay giữa chừng
//break : dừng ngay tại vị trí
//continue : bỏ qua , nhảy sang vòng lặp tiếp theo
// được dùng trong for cổ điển , while , for of , for in

//syntax 
//for(...)
//if(dieukien)
// break : nhảy ra ngoài vòng lặp , chạy code phía dưới

//for(...)
//if(dieukien)
//continue : bỏ qua dòng code ở đây, chạy tiếp vòng lặp

//break
//
// for(let i=1; i<=100;i++) {
//     if(i%7 === 0) {
//         console.log(`Tìm thấy ${i}`);
//         break;
//     }
// }


// let sanPhams = [
//     {ten: "iphone", conHang : true},
//     {ten: "airpods", conHang : false},
//     {ten: "macbook", conHang : true},
// ]

// for(let sanpham of sanPhams) {
//     if(sanpham.conHang === false) {
//         console.log(`Sản phẩm hết hàng đầu tiên : ${sanpham.ten}`);
//         break;
//     }
// }

//continue
// for(let i = 1; i<=10;i++){

//     if(i % 2 === 0) {
//         continue;
//     }
//     console.log(`Số lẻ là ${i}`);
// }

// let userInfo = {
//     ten: "Neko",
//     email : "neko@gmail.com",
//     password: "abc123",
//     role: "admin"
// }

// let fillID = ["password"]
// //dùng includes trong array , bỏ qua field nhạy cảm 

// for( let key in userInfo) {
//     if(fillID.includes(key)) {
//         continue
//     }
//     console.log(` ${key}  : ${userInfo[key]}`);
// }

// let danhSachGia = [5000, 120000, 80000, 30000, 25000, 50000]

// let danhSachVip = []

// for(let gia of danhSachGia) {
//     if(gia > 100000) {
//         danhSachVip.push(gia)
//     }
// }

// console.log(danhSachVip);
// console.log(danhSachVip.length);






