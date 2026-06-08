//1.Bản chất đơn luồng (single thread) của JS
//Main thread (luồng chính) của JS
//Multi-threading : xử lí nhiều việc
//Nhưng JS chỉ có thể làm từng việc 1, dòng này xong mới tới dòng khác.
// -> Lập trình đồng bộ ( Synchronus)

// console.log("Khách A:Order Matcha ");
// console.log("Nhân viên : OK. Doing...");

//  //Tác vụ nặng chạy đồng bộ : đóng băng hệ thống
// let thoiGianBatDau = Date.now()
// while (Date.now() - thoiGianBatDau < 3000) {
//     //Blocking CPU bị nhốt trong vòng lặp này (trong suốt 3s)
// }
// //Phải chờ 3s sau, khi vòng lặp kết thúc, các dòng lệnh bên dưới mới được chạy
// console.log("Nhân viên : Done");
// console.log("Tới khách B .....");

//Vì vòng lăp while là 1 lệnh đồng bộ Main thread 

//Trong AT : thao tác nặng nhất khiến máy tính phải tốn hàng giây đồng hồ xử lí ko phải tính toán, mà là các tác vụ I/O(Input/Output - giao tiếp vs thế giới bên ngoài)
//Bởi vì khi làm việc vs các tác vụ này CPU ko tự làm -> mà nó chỉ gửi yêu cầu ra bên ngoài rồi ngồi đợi kết quả (input)
//tgian chờ nằm  ngoài hoàn toàn kiểm soát của CPU , phụ thuộc vào tốc độ mạng, tốc độ phản hồi server

//Những tác vụ như nào với AT : 
//IO với file hệ thống : đọc/ghi file , dung lượng lớn để lấy data
//Lưu ảnh chụp màn hình vào report sau chạy test
//IO với trình duyệt: click vào 1 nút(page.click()) -> CPU sẽ gửi lệnh click cho trình duyệt, rồi chờ trình duyệt xử lí sự kiện, render lại DOM, và phản hồi xong
//IO với server (network) : gọi API để tạo dữ liệu (phụ thuộc vào server xử lý) 
//Kết nối db -> chờ server trả về kết quả query

//Mô hình bất đồng bộ (asynchronus):
//Thay vì main thread phải đứng chờ, JS làm như này .VD:
//1.Hệ thống nhận được Order load 1 trang web(tác vụ nặng) từ user
//2.Ném tác vụ đó ra sau cho hệ thống mạng xử lý, đồng thời phát cho user 1 promise
//3.Luồng chính lập tức rảnh tay, quay sang phục vụ khách B (chạy tiếp code bên dưới)
//4.Khi web load xong, hệ thống sẽ " gọi lại " cái promise để xử lí tiếp
// Có 3 trạng thái của promise: 
//pending() : mình vừa cầm tờ biên lai, hệ thống mang đi chạy ngầm -> lúc này chưa có dữ liệu
//fulfilled/Resolved (thành công) -> trang web tải xong 100%
//rejected ( rớt mạng - timeout) lúc này tờ biên lai bị chuyền kèm theo lỗi

//Để có thể lấy được thông tin từ promise chúng ta dùng 2 phương thức ghép nối:
//.then(callback) : tự động kích hoạt nếu promise thành công ( resolved)- dùng để lấy dữ liệu làm bước tiếp
//.catch(callback) : tự dộng kích hoạt nếu promise thất bại(reject)
// syntax:
// const tenPromise = new Promise((resolve, reject)=> {
//     //làm việc bất đồng bộ ở đây
//     //nếu thành công
//     resolved(giaTriThanhCong)

//     //nếu thất bại
//     reject(lyDoLoi)
// })

// function taoBienLai(thanhCong) {
//     return new Promise((resolve, reject) => {
//         if(thanhCong) {
//             resolve("Đã pha matcha xong")
//         } else {
//             reject(new Error("Hết matcha"))
//         }
//     })
// }

// Đầu ra của new promise : chúng ta sẽ dùng then hoặc catch để đón thông tin
//taoBienLai(false).then((ketqua)=> console.log(ketqua)).catch((err)=> console.log(err))

// taoBienLai(true).then((ketQua)=> {
//     console.log("Then nhận : ", ketQua);
// })

// taoBienLai(false).catch((Loi)=> {
//     console.log("Catch nhận", Loi);
// })

// function datHangOnline(maDon, conHang) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             if(conHang) {
//                 resolve({
//                     maDon: maDon,
//                     sanPham: "Matcha",
//                     tongTien: 40000,
//                 })
//             } else {
//                 reject(new Error(`Đơn ${maDon}: sản phẩm đã hết hàng`))
//             }
//         }, 5000)
//     })
// }

// console.log("1.Gửi yêu cầu đặt hàng");
// datHangOnline("SP001", true).then((donHang)=> {
//     console.log("3. Then() Nhận đơn hàng  : ", donHang);
//     return donHang.maDon
// }).then((maDon)=> {
//     console.log('4.Chuyển sang bước thanh toán cho mã đơn', maDon);
// }).catch((loi)=> {
//     console.log("Không chạy vào đây vì SP001 thành công", loi.message);
// })
// console.log("2.Code dưới này vẫn chạy ngon, không chờ Promise xong");

// datHangOnline("SP002", false).then((donHang)=> {
//     console.log("Khong chạy vao day vi SP002 thất bại", donHang);
// }).catch((loi)=> {
//     console.log("5.Catch bat loi", loi.message);
// })
// console.log('3. Đợi SP002')

//Lập trình Bất đồng bộ : ko làm block luồng

//-----------------------------------------------------------------------------------------------------------------
//Giá trị truyền vào resolve(), reject() sẽ tự động chảy ra thành tham số đầu vào cho .then() hoặc .catch()
//Đây chính là cầu nối dữ liệu giúp luân chuyển xuyên suốt promise
//resolve và reject : chỉ nhận đúng 1 giá trị , gtri đó có thể là : bất kì giá trị gì . VD :

// function traVeDuLieu(kieu) {
//     return new Promise((resolve, reject) => {
//         if (kieu === 'string') {
//             resolve("Đăng nhập thành công")
//         }
//         else if (kieu === 'number') {
//             resolve(200)
//         } else if (kieu === 'boolean') {
//             return true
//         } else if (kieu === 'object') {
//             resolve({
//                 maDon: 123,
//                 sanPham: "Matcha",
//                 tongTien: 40000,
//             })
//         } else if (kieu === "array") {
//             resolve(["san pham A", "san pham B"])
//         } else if (kieu === "function") {
//             resolve(() => {
//                 return "Toi la function dc resolve"
//             })
//         } else {
//             reject(new Error("Khong ho tro kieu du lieu " + kieu))
//         }
//     })
// }

// traVeDuLieu("string").then((msg)=> console.log(msg));
// traVeDuLieu("object").then((data)=> console.log(data));
// traVeDuLieu("array").then((data)=> console.log(data));
// traVeDuLieu("unknown").catch((loi)=> console.log("Reject: ", loi.message));

//Chaining ( xâu chuỗi ) : khi then() truyền dữ liệu cho nhau 
//Nếu bên trong then() return 1 giá trị , giá trị đó sẽ tự động trở thành đầu vào cho .then() khác tiếp theo trong chuỗi
//Dữ liệu cứ thế chảy từ bước này sang bước khác

// function moTrangWeb(url) {
//     return new Promise((resolve)=> {
//         setTimeout(()=> {
//             resolve("Trang + " +url+" đã tải xong")
//         }, 3000)
//     })
// }

// moTrangWeb("neko.com").then(
//     (trang)=> {
//         console.log(trang);
//         return 'TOKEN_ABC_123'
//     }).then((token)=> {
//         console.log("Lay token : ", token);
//         return { sp : "ao thun", soLuong : 3} 
//     }).then((gioHang)=> {
//         console.log("Gio hang : ", gioHang);
//     }).catch((loi)=> {
//         console.log(loi);
//     });

//Các cách bắt lỗi (catch reject)
//Khi 1 promise bị reject() : js sẽ tìm chỗ xử lí lỗi gần nhất
//Có 3 cách :
//C1 : catch() ở cuối chuỗi (hay dùng nhất): bắt lỗi từ bất kì then() nào phía trên văng lỗi
//C2 : Mình có thể dùng catch() khi dùng then() 2 tham số (ít dùng )
//C3 : catch() xen giữa chuỗi (nâng cao) -> bắt lỗi từng bước, xử lí xong rồi chạy tiếp

//VD : 
// function moTrangWeb(url) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             if(url === "nhapsai.com") {
//                 reject("Lỗi 404 ko tìm thấy trang")
//             } else {
//                 resolve("Trang " +url+" đã tải xong")
//             }
//         }, 1000)
//     })
// }

//C1
// moTrangWeb("nhapsai0.com").then(
//     (trang)=> {
//         throw new Error("Lỗi bất ngờ xảy ra trong then")
//         console.log(trang);
//         return "Token abc_123"
//     }).then((token)=> {
//         console.log("Lay token", token);
//         return {sp : "ao thun", soLuong : 3}
//     }).then((gioHang)=> {
//         console.log("Gio hang ", gioHang);
//     }).catch((loi)=> {
//         //Vi url sai -> reject -> nhảy vào đây, bỏ qua 2 bước then
//         console.log(loi);
//     });

//C2    
// moTrangWeb("nhapsai1.com").then(
//     (data) => {
//         console.log("Thanh cong", data)
//     },
//     (loi) => {
//         console.log("That bai : ", loi);
//     }
// )

// moTrangWeb("nekosensei.com").then(
//     (data) => {
//         throw new Error("Lỗi bất ngờ bên trong")
//         console.log("Thanh cong", data)
//     },
//     (loi) => {
//         console.log("Ham 2 ko thấy lỗi này", loi);
//     }
// ).catch((loi)=> {
//     console.log("Catch o day moi bat duoc : ", loi.message);
// })

//setTimeout(): 
//Cú pháp setTimeout(callback,delay)
//Callback sẽ đc gọi sau khi delay (1000 : 1s)
//Trả về id số nguyên có thể hủy hẹn giờ nếu cần

// let idHenGio = setTimeout(()=> {
//     console.log("Bum ! Bom no");
// }, 5000)

// console.log("ID hen gio", idHenGio);
// clearTimeout(idHenGio)
// console.log("Da huy bom");

// Được dùng để giá lập trạng thái delay , hoặc khi hệ thống xử lí các tác vụ IO.

//Thực tế gặp promise trong JS : 
//(wrap : nghĩa là dưới lớp vỏ của hàm ngta đã sử dụng promise bên dưới), đứng vai trò người dùng ta sẽ dùng then() và catch()
//để lấy dữ liệu
//fetch() : là 1 ví dụ hàm gọi xong là nhận đc promise , ta ko cần định nghĩa new promise()

// fetch("https://api-neko-coffee.autoneko.com/public/test/echo?any_param=").then(
//     (response) => response.json()
// ).then((data)=> {
//     console.log("data : ", data);

//     console.log("message : ", data.message);
// }).catch((loi)=> console.log(loi))

//nâng cấp gọi api
// function goiEchoApi() {
//     return fetch("https://api-neko-coffee.autoneko.com/public/test/echo?any_param=")
//     .then((response)=> {
//         if(!response.ok){
//             throw new Error("HTTP ERROR"+ response.status)
//         }
//         return response.json()
//     }).then((data)=> {
//         if(!data.message || !data.timestamp) {
//             throw new Error("API tra ve sai rule thieu truong")
//         }
//         return data
//     })
// }

// // // goiEchoApi():
// goiEchoApi().then((data)=> console.log("echo api tra ve", data.message)).catch((loi)=> console.log(loi))

//BT :
// function kiemTraMatKhau(matKhau) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             if(matKhau === 'Neko@123') {
//                 resolve('Đăng nhập thành công. Chào admin')
//             }
//             else {
//                 reject('Sai mật khẩu')
//             }
//         }, 1500)
//     })

// }

// kiemTraMatKhau('Neko@123').then((data)=> console.log(data))
// kiemTraMatKhau('abczyx').catch((loi)=> console.log(loi))

//kiemTraMatKhau('Neko@23').then((result)=> console.log(result)).catch((error)=> console.log(error))

//Callback hell
console.log("Bắt đầu");

new Promise((resolve) => {
    resolve("OK")
}).then(() => {
    console.log("Then 1");
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Lỗi promise bên trong")
        }, 1000)
    })
    // .catch((err) => {
    //     console.log("Catch bên trong bắt được", err);
    // })
}).catch((err) => console.log("Catch bên ngoài", err))

console.log("Kết thúc");

//dùng return
// console.log("Bắt đầu..")
// new Promise((resolve) => {
//     resolve("OK")
// }).then(() => {
//     console.log("Then 1");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Lỗi promise bên trong")
//         }, 1000)
//     })
    
// }).catch((err) => console.log("catch bên ngoài", err))

// console.log("Kết thúc");

//Mở trang web (1s)
// function moTrangWeb(url) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (url === 'nhapsai.com') {
//                 reject("Loi 404 : ko tim thay trang")
//             }
//             {
//                 resolve("Trang " + url + "da tai xong")
//             }
//         }, 1000)
//     });
// }

// //Đăng nhập : cần kết quả từ b1 (mất 1s)
// function dangNhap(trangWeb, user, pass) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (pass === "saimatkhau") {
//                 reject("Sai mật khẩu")
//             } else {
//                 resolve("Token : " + user.toUpperCase() + "_" + Date.now())
//             }
//         }, 1000)
//     })
// }

// //function themVaoGioHang
// function themVaoGioHang(token, sanPham) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ token: token, sanPham: sanPham, soLuong: 2 })
//         }, 1000)
//     })
// }

// function thanhToan(gioHang) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hóa đơn " + gioHang.sanPham + " - " + gioHang.soLuong)
//         }, 1000)
//     })
// }

// console.log("Bắt đầu kịch bản test");
// moTrangWeb("neko.com").then((trangWeb) => {
//     console.log("1", trangWeb);
//     dangNhap(trangWeb, "admin", "Neko@123").then((token) => {
//         console.log("2", token);
//         themVaoGioHang(token, "Khoa hoc playwright").then((gioHang) => {
//             console.log("3", gioHang);
//             thanhToan(gioHang).then((hoadon) => {
//                 console.log("4", hoadon);
//                 console.log("TEST PASS");
//             })
//             .catch((e) =>console.log("Loi thanh toan"))
//         }).catch((e)=> console.log("Loi gio hang"))
//     }).catch((e)=> console.log("Loi dang nhap"))
// }).catch((e)=> console.log("Loi mo web"))
//callback hell 


// Flat chaining
// moTrangWeb("nekosensei.com").then((trangweb)=> {
//     console.log("1", trangweb);
//     return dangNhap(trangweb, "admin", "Neko@123")
// }).then()


//Cứu tinh callback hell : Async/Await
//Là 1 lớp vỏ bọc của promise và then : viết code dễ nhìn 
//async : biến 1 hàm thường thành 1 hàm bất đồng bộ, làm cho hàm đó 100% sẽ trả về 1 promise, dù mình có return 1 giá trị bth.
//JS sẽ tự động bọc nó trong promise.resolve()
//Bên trong hàm ta có quyền sử dụng từ await

//declaration
// async function layDuLieuUser() {
//     // tự động bọc thành promise.resolve("Dữ liệu user")
//     return "Du lieu user"
// }
// //expression
// const layDonHang = async function () {
//     return "Danh sach don hang"
// }
// //arrow
// const laySanPham = async () => {
//     return "Danh sach san pham"
// }

// function hamThuong() {
//     return "xin chao"
// }

// console.log(hamThuong())

// async function hamAsync() {
//     return "xin chao"
// }

// // console.log(hamAsync())
// hamAsync().then((ketqua)=> {
//     console.log("Nhan duoc", ketqua)
// })

//await : Đặt await trước lệnh trả về promise , nó sẽ tạm dừng dòng code bên trong hàm async, chờ promise hoàn tất , trả
//về giá trị mà promise resolve(), có thể gán thẳng vào biến, ko làm đóng băng hệ thống

// function goiApi(url) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ status: 200, data: "Kết quả từ " + url })
//         }, 2000);
//     })
// }

// // //async - await (phải nhớ await chỉ đc khai báo trong hàm async

// async function layDuLieu() {
//     console.log("Đang gọi API")
//     //await  : tạm dừng hàm layDuLieu tại dòng này.chờ 2s để gọi api resolve, lấy giá trị gán vào biến
//     let ketQua = await goiApi("neko.com")
//     console.log('Đã nhận: ', ketQua)
// }

// layDuLieu()

// function chonNhaHang(ten) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(ten), 1000)
//     })
// }

// function xemMenu(nhaHang) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 nhaHang: nhaHang,
//                 monAn: ["Pho", "Ca phe"]
//             }), 1000
//         })
//     })
// }

// async function datDoAnOnline() {
//     console.log("Bat dau dat do an ....")
//     let nhaHang = await chonNhaHang("quan neko")
//     console.log(nhaHang)
//     let menu = await xemMenu(nhaHang)
//     console.log(menu)
// }

// datDoAnOnline()

// async function datHangOnline() {
//     let trangWeb = await moTrangWeb("neko.com")
//     let token = await dangNhap(trangWeb, "username", "pass")
//     let addProduct = await themVaoGioHang(token, ['ao so mi', 'quan bo'])
//     let payment = await thanhToan(addProduct)
//     console.log(payment)
// }

// datHangOnline()

//VD :
// async function layTen() {
//     return "neko";
// }

// async function chaoHoi() {
//     const ten = await layTen()
//     return "xin chao " + ten
// }

// async function chayXinChao() {
//     const loiChao = await chaoHoi()
//     console.log(loiChao)
// }

// chayXinChao()

//Bản chất : await có chờ đợi, nhưng nó chỉ đóng băng trong phạm vi cái hàm đó, còn các code thuộc phạm vi bên ngoài vẫn chạy
//bản chất chờ đợi (pausing) nội bộ khác hoàn toàn vs việc đóng băng hệ thống

//VD :
// const lamBitTet = () => new Promise(res => setTimeout(() => (res('Bit tet')), 3000))
// const vatNuocCam = () => new Promise(res => setTimeout(() => (res("Nuoc cam")), 1000))

// async function phucVuTuanTu() {
//     console.log('KHACH A : BAT DAU ORDER TUAN TU: ')
//     let start = Date.now()

//     let mon1 = await lamBitTet()
//     console.log(`Đã xong ${mon1} sau 3s. Tiep tuc vat nuoc cam`)

//     let mon2 = await vatNuocCam();

//     let thoiGian = (Date.now() - start) / 1000;
//     console.log(`Khách A nhận đủ đồ. Tổng thời gina : ${thoiGian}`)
// }

// phucVuTuanTu()
// console.log('KHACH B : CHO MUON MENU')

//Async await : hỗ trợ tuần tự bên trong logic , vừa ko đóng băng luồng để chạy song song nhiều hàm async-await

//Những điều cần nhớ:
//forEach là method của array ( ko có break và continue) . Ko dùng đc hàm async await
// const fruits = ["apple", "banana", "orange"]
// fruits.forEach((item)=> console.log(item))
//VD :

// function goiApi(url) {
//     return new Promise((resolve)=> {
//         setTimeout(()=> {
//             resolve(`Dữ liệu từ ${url}`)
//         }, 1000)
//     })
// }

// let danhSachUrl = ["user", "products", "orders"];

// danhSachUrl.forEach(async (url)=> {
//     let data = await goiApi(url);
//     console.log(data);
// })

// async function goiTuanTu() {
//     for(let url of danhSachUrl) {
//         let data = await goiApi(url)
//         console.log(data);
//     }
//     console.log("GOI XONG HÊT");

// }
// goiTuanTu()

//Promise.all

// function taiAnhAvatar() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Avatar đã tải xong"), 3000)
//     })
// }

// function layDanhSachSanPham() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Lay danh sach san pham xong"), 2000)
//     })
// }

// function docFileCauHinh() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Doc xong file cau hình"), 1000)
//     })
// }

// async function chuanBiTuanTu() {
//     let start = Date.now();

//     let avatar = await taiAnhAvatar();
//     console.log("DONE", avatar);

//     let sanPham = await layDanhSachSanPham();
//     console.log("DONE", sanPham);

//     let config = await docFileCauHinh();
//     console.log("DONE", config);

//     let tongThoiGian = (Date.now() - start) / 1000;
//     console.log(`Tổng thời gian ${tongThoiGian}`);

// }
// chuanBiTuanTu()

// async function chuanBiSongSong() {
//     let start = Date.now();

//     let [ avatar, sanPham, config ] = await Promise.all([
//         taiAnhAvatar(),
//         layDanhSachSanPham(),
//         docFileCauHinh()
//     ])

//     console.log("DONE", avatar);
//     console.log("DONE", sanPham);
//     console.log("DONE", config);

//     let tongThoiGian = (Date.now() - start) / 1000;
//     console.log(`Tổng thời gian ${tongThoiGian}`);
// }
// chuanBiSongSong()
//-> Promise all : chạy song song và gom kết quả

// let ketqua = await Promise.all([promise1, promise2,...])
//Cách hoạt động của promise.all
//1.nhận vào 1 mảng chứa nhiều promise
//2.kích hoạt tất cả promise chạy cùng 1 lúc
//3.đợi cho đến khi tất cả đều resolve xong
//4.Trả về 1 mảng kết quả theo đúng thứ tự ban đầu
//THỜI GIAN = thời gian tác vụ lâu nhất (ko cộng dồn)

//Nếu bất kì promise nào trong mảng bị reject thì promise.all sẽ dừng ngay và nhảy vào catch(), các promise khác dù đã thành
//công cũng bị bỏ qua

// function thanhCong() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("XONG"), 1000)
//     })
// }

// function thatBai() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject("server bị lỗi"), 500)
//     })
// }

// async function testFailFast(params) {
//     try {
//         let ketQua = await Promise.all([thanhCong(), thatBai(), thanhCong()])
//         console.log("Khong bao gio chay den day");

//     } catch (loi) {
//         console.log("Promise all that bai", loi);
//     }
// }
// testFailFast()

//await Promise.all( [
// 1.Giăng 1 cai bẫy đợi API thanh toan trả ve
//page.waitForResponse('*/api/thanhtoan')
// 2. đồng thời thực hiện hành động click
//page.click('abc')
//])

// Trái ngược vs Promise.all là Promise.allSettled()
//Giống hệt promise.all chạy tất cả cùng 1 lúc, nhưng ko dừng khi gặp lỗi, nó kiên nhẫn đợi tất cả chạy xong r trả về mảng 
//kết quả, bao gồm cả thành công lẫn thất bại
//Trả về mảng object, mỗi phần tử có dạng 
// [{ status: 'fulfilled', value: <giá trị resolve>  <- thanh cong}
//{status : 'rejected' , reason:<giá trị reject>  <-that bai}]

// //VD:
// function xoaTestAccount(tenAccount, thoiGian, xoaDuoc) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (xoaDuoc) {
//                 resolve(`Đã xóa ${tenAccount}`)
//             } else {
//                 reject(`Không xóa được ${tenAccount}`)
//             }
//         }, thoiGian)
//     })
// }

// async function donDepTaiKhoan() {
//     let ketQua = await Promise.allSettled([
//         xoaTestAccount("user_01", 1200, true),
//         xoaTestAccount("user_02", 900, false),
//         xoaTestAccount("user_03", 1500, true)
//     ])

//     //console.log(ketQua);
    
//     let baoCao = ketQua.map((item, index)=> {
//         let ten = ['user_01', 'user_02', 'user_03'][index];
//         //const userName = item.status === 'fulfilled' ? item.value : item.reason
//         return `${ten} : ${item.status === "fulfilled" ? "PASS" : "FAIL"}`
//     })
//     console.log(baoCao);
    
// }

// donDepTaiKhoan()

//Bắt lỗi trong async/await : try...catch ...finally
//Cú pháp :
//try{
//code nguy hiểm có thể gây lỗi (bất kì dòng await nào có lỗi)
//} catch (loi) {
//xử lý khi bất kì await nào ở trên bị reject
//bien loi chứa nội dung reject hoặc error object (khi gọi new Error)
//} finnaly {
//Luôn luôn chạy = dù try thành công hay catch bắt lỗi
//dùng để dọn dẹp
//}

// function goiApi(url) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             let thanhCong = Math.random() > 0.5;
//             if(thanhCong) {
//                 resolve({status : 200, data: "Ket qua tu "+url})
//             } else {
//                 reject("Lỗi 500 server" + url)
//             }
//         }, 2000)
//     })
// }

// async function layDuLieuAnToan() {
//     try {
//         let user = await goiApi("api.neko.com.vn/user");
//         console.log(user.data);

//         let orders = await goiApi("api.neko.com.vn/orders");
//         console.log(orders.data);   
//     }catch (loi){
//         console.log("Da xay ra loi", loi);
//     } finally {
//         console.log("DON DEP TAI NGUYEN");
//     }
// }

// layDuLieuAnToan()