//Closure
//Định nghĩa : Closure là 1 hàm ghi nhớ các biến xung quanh nơi nó được sinh ra, và gom vào 1 cái balo dù sau này cái hàm đó 
// bị mang đi chạy ở nơi khác, nó vẫn xách theo cái balo đó đi để dùng

//Cú pháp : closure ko có từ khóa riêng 
// function hamCha() {
//     //có khai báo biến trong hàm cha
//     let bienRiengTu = 0

//     //có hàm con bên trong - hàm này sử dụng biến của cha
//     function hamCon() {
//         bienRiengTu++
//         return bienRiengTu
//     }

//     return hamCon
// }

//3 dấu hiệu chính khi nhận biết 1 closure
//Hàm lồng trong hàm , hàm con nằm trong hàm cha
//Hàm con sử dụng biến của hàm cha
//Khi hàm con chạy nó vẫn truy cập đc biến của hàm cha


//Hình thái 1 : Cổ điển ( Return ra 1 hàm khác)

// function taoMayChao(ten) {
//     function loiChao() {
//         console.log(`Xin chao, ${ten}`);        
//     }
//     return loiChao;
// }

// const chaoNeko = taoMayChao("Neko")
//console.log(chaoNeko);
// chaoNeko()

//Hình thái 2: Callback : chạy trễ sau đó ko cần return
//Kiểu này hay gặp trong setTimeout, setInterval
// function demoHenGio() {
//     let message = "Tôi vẫn còn sống"

//     setTimeout(function() {
//         console.log(message);
//     }, 100)
// }

// demoHenGio()

//Hình thái 3: Dùng obj có sẵn scope bên ngoài
// const testContext = {
//     env: 'staging',
//     retry : 0,
// }

// function taoLoggerKetQua() {
//     return function (testName) {
//         console.log(`${testName} - ${testContext.env} - Retry ${testContext.retry}`);
        
//     }
// }

// const logResult = taoLoggerKetQua();
// logResult("Login")

//Điểm lưu ý : closure ko sao chép nguyên object , nó giữ quyền truy cập tới biến / tham chiếu đang trỏ tới object

//Hình thái 4 : Trả về object có method dùng chung biến ngoài
// function taoBoDem() {
//     let count = 0;
//     return {
//         tang() {
//             count++
//             console.log(`Count = ${count}`);
//         },
//         reset() {
//             count = 0;
//             console.log("Reset xong");
            
//         }
//     }
// }

// const boDem = taoBoDem()
// boDem.tang()
// boDem.tang()
// boDem.reset()
// boDem.reset()

//Closure sẽ giải quyết vấn đề gì ??
// let soThuTu = 0;

// function taoIdTest() {
//     soThuTu++
//     return `USER_TEST_${soThuTu}`
// }

// console.log(taoIdTest());
// console.log(taoIdTest());
// soThuTu = 999;

// console.log(taoIdTest());

// function mayTaoId() {
//     //khai bao bien dem 
//     let soThuTu = 0

//     function tangId() {
//         soThuTu++;
//         return `USER_TEST_${soThuTu}`
//     }
//     return tangId
// }
// const layIdMoi = mayTaoId();
// console.log(layIdMoi());
// console.log(layIdMoi());
// console.log(layIdMoi());

// Khi mayTaoId chạy xong -> theo quy tắc scope , biến soThuTu sẽ chết
//nhưng vì cta đã tạo ra return tangId và hàm tangId đang closure (bao đóng)
//biến soThuTu vào balo kí ức.Do đó biến soThuTu bất tử và tiếp tục tăng lên mỗi lần gọi layIdMoi()

//Ứng dụng data factory

// function taoNhaMaySinhEmail(domain) {
//     let dem = 0

//     return function () {
//         dem++;
//         return `Tester_${dem}@{domain}`
//     }
// }

// const sinhEmailStaging = taoNhaMaySinhEmail("staging.neko.vn")
// const sinhEmailProd = taoNhaMaySinhEmail("neko.com")

// console.log(sinhEmailStaging())
// console.log(sinhEmailStaging());
// console.log(sinhEmailStaging());

// console.log(sinhEmailProd());
// console.log(sinhEmailProd());
// console.log(sinhEmailProd());

//BT : Viết 1 hàm taoBoDem(tenNut) trả về 1 object với 2 method 
//click() : tăng số lần click lên 1 và in ra tên nút click 
//reset() : đặt lại click = 0 và in ra tên nút reset

//vdu kết quả mong muốn
// const nutLogin = taoBoDem("Login Button")
// nutLogin.click() -> login button : 1 clicks
// nutLogin.click() -> login button : 2 clicks
// nutLogin.reset()
// nutLogin.click() -> login button : 1 clicks


// function taoBoDem(buttonName) {
//     let count = 0;

//     return {
//         click() {
//             count++;
//             console.log(`${buttonName} : ${count} click`);
//         },
//         reset() {
//             count =0 ;
//         }
//     }
// }

// const nutLogin = taoBoDem('Login button')
// nutLogin.click()
// nutLogin.click()
// nutLogin.reset()
// nutLogin.click()

