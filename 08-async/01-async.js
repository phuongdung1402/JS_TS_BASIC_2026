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