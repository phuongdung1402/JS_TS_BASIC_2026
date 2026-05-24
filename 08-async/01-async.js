//Bản chất đơn luồng (single thread) của JS
//Main thread (luồng chính) của JS
//Multi-threading : xử lí nhiều việc
//Nhưng JS chỉ có thể làm từng việc 1.
// -> Lập trình đồng bộ ( Synchronus)

// console.log("Khách A: Matcha ");
// console.log("Nhân viên : OK. Doing...");

// //Tác vụ nặng chạy đồng bộ : đóng băng hệ thống

// let thoiGianBatDau = Date.now()
// while (Date.now() - thoiGianBatDau < 3000) {

// }

// console.log("Nhân viên : Done");
// console.log("Tới khách B .....");

//vì vòng lăp while là 1 lệnh đồng bộ Main thread 

//Trong AT : thao tác nặng nhất khiến máy tính phải tốn hàng giây đồng hồ xử lí ko phải tính toán  mà là các tác vụ IO(Input/Output - giao tiếp vs thế giới bên ngoài)
//Bởi vì khi làm việc vs các tác vụ này CPU ko tự làm -> mà nó chỉ gửi yêu cầu ra bên ngoài rồi ngồi đợi kết quả (input)
//tgian chờ nằm  ngoài hoàn toàn kiểm soát của CPU , phụ thuộc vào tốc độ mạng, tốc độ phản hồi server

//AT : 
//IO với file hệ thống : đọc/ghi file , dung lượng lớn để lấy data
//Lưu ảnh chụp màn hình vào report sau chạy test

//IO với trình duyệt: click vào 1 nút(page.click()) -> CPU sẽ gửi lệnh click cho trình duyệt, rồi chờ trình duyệt xử lí sự kiện, render lại DOM, và phản hồi xong

//IO với server (network) : gọi API để tạo dữ liệu (phụ thuộc vào server xử lý) -Kết nối db -> chờ server trả về kết quả query

//Mô hình bất đồng bộ (asynchronus)
//Thay vì main thread phải đứng chờ, JS làm như này 
//1.Hệ thống nhận được Order load 1 trang web(tác vụ nặng) từ user
//2.Ném tác vụ đó ra sau cho hệ thống mạng xử lý, đồng thời phát cho user 1 promise
//3.Luồng chính lập tức rảnh tay, quay sang phục vụ khách B (chạy tiếp code bên dưới)
//4.Khi web load xong, hệ thống sẽ " gọi lại " cái promise để xử lí tiếp
// Có 3 trạng thái : 
//pending() : mình vừa cầm tờ biên lai, hệ thống mang đi chạy ngầm -> lúc này chưa có dữ liệu
//fulfilled/Resolved (thành công) -> trang web tải xong 100%
//rejected ( rớt mạng - timeout) lúc này tờ biên lai bị chuyền kèm theo lỗi

//Để có thể lấy được thông tin từ promise chúng ta dùng 2 phương thức ghép nối
//.then(callback) : tự động kích hoạt nếu promise thành công ( resolved)- dùng để lấy dữ liệu làm bước tiếp
//.catch(callback) : tự dộng kích hoạt nếu promise thất bại(reject)
// syntax

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

// đầu ra của new promise : chúng ta sẽ dùng then hoặc catch để đón thông tin

// taoBienLai(true).then((ketQua)=> {
//     console.log("Then nhận", ketQua);

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
//     console.log("3. Then() Nhận đơn hàng", donHang);
//     return donHang.maDon
// }).then((maDon)=> {
//     console.log('4.Chuyển sang bước thanh toán cho mã đơn', maDon);
// }).catch((loi)=> {
//     console.log("Không chạy vào đây vì SP001 thành công");

// })

// console.log("2.Code dưới này vẫn chạy ngon, không chờ Promise xong");

// datHangOnline("SP002", false).then((donHang)=> {
//     console.log("Khong chạy vao day vi SP002 thất bại", donHang);

// }).catch((loi)=> {
//     console.log("5.Catch bat loi", loi.message);
// })

// console.log('3. Đợi SP002')

// Giá trị truyền vào resolve(), reject() sẽ tự động chảy ra thành tham số đầu vào cho then() hoặc catch()
//đây chính là cầu nối dữ liệu giúp luân chuyển xuyên suốt promise
//resolve và reject : chỉ nhận đúng 1 giá trị , gtri đó có thể là

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
//             resolve(["san pham A"])
//         } else if (kieu === "function") {
//             resolve(() => {
//                 return "Toi la function dc resolve"
//             })
//         } else {
//             reject(new Error("Khong ho tro kieu du lieu" + kieu))
//         }
//     })
// }

//traVeDuLieu("string").then((msg)=> console.log(msg));
// traVeDuLieu("object").then((data)=> console.log(data));
// traVeDuLieu("unknown").catch((loi)=> console.log("reject", loi.message))

//Chaining ( xâu chuỗi ) : khi then() truyền dữ liệu cho nhau 
//Nếu bên trong then() return 1 giá trị , giá trị đó sẽ tự động trở thành đầu vào cho then() khác tiếp theo trong chuỗi
//Dữ liệu cứ thế chảy từ bước này sang bước khác

// function moTrangWeb(url) {
//     return new Promise((resolve)=> {
//         setTimeout(()=> {
//             resolve("Trang + " +url+" đã tải xong")
//         }, 1000)
//     })
// }


// moTrangWeb("neko.com").then(
//     (trang)=> {
//         console.log(trang);
//         return "Token abc_123"
//     }).then((token)=> {
//         console.log("Lay token", token);
//         return {sp : "ao thun", soLuong : 3}
        
//     }).then((gioHang)=> {
//         console.log("Gio hang ", gioHang);
//     }).catch((loi)=> {
//         console.log(loi);
        
//     });

    //Các cách bắt lỗi (catch reject)
    //Khi 1 promise bị reject() : js sẽ tìm chỗ xử lí lỗi gần nhất
    //Có 3 cách :
    //C1 : catch() ở cuối chuỗi (hay dùng nhất): bắt lỗi từ bất kì then() nào phía trên
    //C2 : Mình có thể dùng catch() khi dùng then() 2 tham số (ít dùng )
    //C3 : catch() xen giữa chuỗi (nâng cao) -> bắt lỗi từng bước, xử lí xong rồi chạy tiếp


// function moTrangWeb(url) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             if(url === "nhapsai.com") {
//                 reject("Lỗi 404 ko tìm thấy trang")
//             } else {
//                 resolve("Trang + " +url+" đã tải xong")
//             }
//         }, 1000)
//     })
// }

// //C1
// moTrangWeb("neko.com").then(
//     (trang)=> {
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

// //C2    

// moTrangWeb("nhapsai.com").then(
//     (data) => {
//         console.log("Thanh cong", data)
//     },
//     (loi) => {
//         console.log("That bai", loi);
//     }
// )


// moTrangWeb("nekosensei.com").then(
//     (data) => {
//         throw new Error("Lỗi bất ngờ bên trong")
//         //console.log("Thanh cong", data)
//     },
//     (loi) => {
//         console.log("Ham 2 ko thấy lỗi này", loi);
//     }
// ).catch((loi)=> {
//     console.log("Catch o day moi bat duoc", loi.message);
// })

//setTimeout()
//Cú pháp setTimeout(callback,delay)
//Callback sẽ đc gọi sau khi delay (1000 : 1s)
//Trả về id số nguyên có thể hủy hẹn giờ nếu cần

// let idHenGio = setTimeout(()=> {
//     console.log("Bum ! Bom no");
// }, 5000)

// console.log("ID hen gio", idHenGio);
// clearTimeout(idHenGio)
// console.log("Da huy bom");

//Thực tế gặp promise trong JS : 
//fetch() : là 1 ví dụ hàm gọi xong là nhận đc promise , ta ko cần định nghĩa new promise()

// fetch("https://api-neko-coffee.autoneko.com/public/test/echo?any_param=").then(
//     (response) => response.json()
// ).then((data)=> {
//     console.log("data", data);
    
//     console.log("message", data.message);
// }).catch((loi)=> console.log(loi))

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

// goiEchoApi()
// .then((data)=> console.log("echo api tra ve", data.message))
// .catch((loi)=> console.log(loi))

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






// //MỞ trang web (mất 1s)
// function moTrangWeb(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "nhapsai.com") {
//         reject("loi 404: ko tim thay trang");
//       } else {
//         resolve("Trang + " + url + "Đã tải xong");
//       }
//     }, 1000);
//   });
// }
// // Đăgg nhập:  cần kết quả từ b1 (mât 1s)
// function dangNhap(trangWeb, user, pass) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (pass === "saimatkhau") {
//         reject("Sai mat khau");
//       } else {
//         resolve(" Token " + user.toUpperCase() + "_" + Date.now());
//       }
//     }, 1000);
//   });
// }
// //function themVao Gio Han
// function themVaoGioHang(token, sanPham) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ token: token, sanPham: sanPham, soLuong: 2 });
//     }, 1000);
//   });
// }
// function thanhToan(gioHang) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hóa đơn " + gioHang.sanPham + gioHang.soLuong);
//     }, 1000);
//   });
// }
// console.log("bắt đầu kịch bản test");
// moTrangWeb("neko.com").then((trangweb) => {
//   console.log("1", trangweb);
//   dangNhap(trangWeb, "admin", "Neko@123").then((token) => {
//     console.log("2", token);
//     themVaoGioHang(token, "khoa hoc playwright").then((gioHang) => {
//       console.log("3", giohang);
//       thanhToan(gioHang).then((hoadon) => {
//         console.log("4", hoadon);
//         console.log("TEST PASS");
//       });
//     });
//   });
// });
