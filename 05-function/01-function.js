//Lý thuyết FUNCTION :
//1. Function gồm 3 thành phần cốt lõi : 
//1 input (parameter)
//2 body ( logic xử lí)
//3 output (return )

//Điểm mấu chốt của function : phần giống nhau sẽ đc gom vào 1 nơi, mỗi lần dùng chỉ việc gọi lại.
// Nó gắn liền vs tư duy DRY : dừng việc lặp cùng 1 đoạn code ở nhiều nơi

//Có 3 loại function ở trong JS
// Cú pháp cơ bản : function declaration - hàm tự định nghĩa
// Syntax :
//function tenHam(đầu vào) {
//body
//đầu ra
//}

//taikhoan va matkhau là tham số
// function dangNhap(taiKhoan, matKhau) {
//     console.log(`Đăng nhập user : ${taiKhoan}`);
//     console.log(`Đăng nhập password: ${matKhau}`);
//     console.log('Click nút Login');
// }

// console.log("TC01");
// dangNhap("adminNeko", "abc")

// console.log("TC02");
// dangNhap("adminNeko2", "abc2")

//từ khóa return - đầu ra
//Return trả về 1 giá trị từ bên trong function ra bên ngoài, có thể là number, string, boolean,object, array...
//Nơi gọi hàm sẽ nhận lại giá trị đó, khi gặp return , function sẽ dừng lại ngay ở đó

// function tinhTongTien(a,b) {
//     const result = a+b;
//     console.log(result);
//     return result
// }

// let tienThanhToan = tinhTongTien(100,2)
// console.log(tienThanhToan);

// function laySoMayMan() {
//     return 8
// }

// const result = laySoMayMan()
// console.log(result)

//sau return : các dòng code phía dưới ko chạy nữa
// function demoReturn() {
//     console.log("Bat dau");
//     return "Xong";

//     console.log('dong nay ko duoc chay');
// }
// console.log(demoReturn());

// function cleanPrice(rawString) {
//     if(!rawString) return 0

//     let text = rawString.replaceAll(' Gía: ', "").replaceAll(" VND", "").replaceAll(".","").trim()
//     let result = parseInt(text)
//     return result
// }

// console.log(cleanPrice(" Gía: 1.500.000 VND    "));
// console.log(cleanPrice("      250.000 VND"));
// console.log(cleanPrice());

//2. Hoisting : gọi 1 hàm trc khi hàm được khởi tạo

// xinChao()

// function xinChao() {
//     console.log('Hoisting');
// }

//Ứng dụng : Viết các kịch bản test ở đầu , vứt hết các hàm hỗ trợ (helper, clean data ) xuống bên dưới của file cho đỡ chật chỗ
//Hoisting : ko phải áp dụng cho tất cả các hàm, nó phụ thuộc vào mình viết hàm kiểu nào
//Viết hàm trong javascript : 
//Cổ điển : function declaration (hàm khai báo) : cách viết truyền thống, bắt buộc phải bắt đầu bằng function và có tên hàm 
//Ưu điểm của function declaration : hỗ trợ 100% hoisting , gọi ở đâu cũng đc, tên hàm rõ ràng , code dễ đọc , dễ debug (sẽ hiện tên hàm trong stack trace)
//Nhược điểm : cú pháp dài dòng hơn so vs arrow function, có this riêng ( có thể ảnh hưởng khi dùng callback )


// let loginStatus = checkLoginStatus()
// console.log(loginStatus);

// function checkLoginStatus(){ return true}

//Function expression
//Cú pháp : const tenHam = function () {...thân hàm}
// Ko được hỗ trợ hoisting

// console.log(checkLoginStatus());

// const checkLoginStatus = function() {
//     return true
// }

//Ưu điểm : An toàn hơn nhờ const. Với declaration , mình có thể vô tình khai báo trùng tên hàm đã khai báo trc , hàm trc sẽ bị ghi đè âm thầm mà ko hề báo lỗi

// function tinh(a,b) {
//     return a+b
// }

// function tinh(a,b) {
//     return a*b
// }

// const result = tinh(3,4)
// console.log(result)

// const tinh2 = function (a,b) {return a +b}
// const tinh2 = function(a,b) {return a*b}

//Linh hoạt : vì hàm đc cất trong biến , nên có thể truyền vào hàm khác
// const utils = {
//     lamSach : function(text) {return text.trim().toLowerCase()}
// }

// console.log(utils.lamSach("   HELLO     "));


//Chọn hàm theo điều kiện
// const moiTruong = "staging"
// const layUrl = moiTruong === 'staging' ? function() {
//     return "https://staging.neko.vn"
// } : function() {
//     return "https://neko.vn"
// };

// console.log(layUrl());

//Arrow function : nâng cấp của function expression , rút gọn tối đa cú pháp
//const tenHam = (thamso,...) => {
//thanHam }
//Dạng rút gọn :
//const tenHam = (thamso1) => console.log('abc)

//ko có chữ function , thêm dấu => ở giữa () và {}

// const tinhTong = (a,b) => {
//     return a+b
// }
// //rút gọn nữa:
// const tinhTongRutGon = (a,b) => a+b

//Ko hỗ trợ hoisting
//Ưu điểm : cú pháp ngắn, hay sử dụng khi viết callback (.map, .filter)
//ko có this riêng -> an toàn khi sử dụng với setTimeout, forEach()
//lưu ý khi viết vs object
//khi debug lỗi sẽ ko hiển thị tên trong stack trace

//Cách sử dụng thực tế :
//Viết method bên trong object 

// const sanPham = {
//     ten: "Iphone17",
//     gia: 200000,

//     //c1:function expression 
//     hienThiExpression : function() {
//         console.log(`${this.ten}-${this.gia} VND`);
//     },

//     //c2 : method shorthand
//     hienThiShortHand() {
//         console.log(`${this.ten}-${this.gia} VND`);
//     },

//     //c3: KHÔNG SỬ DỤNG ARROW FUNCTION KHI VIẾT METHOD TRONG OBJ
//     hienThiArrow: () => {
//         console.log(`${this.ten}-${this.gia}`);
//     }
// }

// sanPham.hienThiExpression()
// sanPham.hienThiShortHand()
// sanPham.hienThiArrow()

//Method trog object hay sử dụng trong các trường:
//ví dụ 1 object có cả data lẫn hành vi

// const cart = {
//     item: 3,

//     getSummary() {
//         return `Có ${this.item} sản phẩm`
//     }
// }

// console.log(cart.getSummary());

// B . Truyền hàm làm callback : truyền 1 hàm vào chỗ khác để nó dc gọi sau
// arrow function là lựa chọn ưu tiên hàng đầu
// const giaSanPham = [15000, 20000, 40000]

// //declaration
// function locGiaCao(gia) {
//     return gia > 20000
// }
// const ketQua1 = giaSanPham.filter(locGiaCao)
// console.log('Function declaration : ', ketQua1)

// // expression
// const ketQua2 = giaSanPham.filter( function (gia) { 
//     return gia > 20000
// })
// console.log('Function expression : ', ketQua2)

// //arrow function
// const ketQua3 = giaSanPham.filter((gia) => gia > 20000)
// console.log('Arrow function : ' , ketQua3)

//Arrow function hoàn toàn thay thế function expression ở rất nhiều code base
//Cả 2 đều dùng const , ko có hoisting , nhưng arrow thì ngắn hơn gấp bội
//Kết luận : chỉ nhớ 2 loại declaration và arrow function


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Kỹ thuật xử lý tham số nâng cao:
//Cách viết hàm cơ bản :-> nâng cao hơn 1 chút

//Function overloading - 1 hàm có nhiều cách gọi
//1 số ngôn ngữ như java,c# : bạn có thể tạo nhiều hàm cùng tên nhưng khác nhau về số lượng và kiểu tham số
//JAVASCRIPT ko hỗ trợ overloading kiểu đó

//Nếu khai báo 2 hàm cùng tên, hàm khai báo sau sẽ ghi đè lên hàm trc ( kể cả có khác nhau về tham số)

// function guiThongBao(message) {
//     console.log(`${message}`);
// }

// function guiThongBao(message, userID){
//     console.log(`${message}, ${userID}`);
// }

// guiThongBao("deploy xong")
// guiThongBao("deploy xong", 100)

//-> Cách giải quyết : nó dùng 1 hàm duy nhất rồi tự kiểm tra dữ liệu đầu vào để xử lý theo từng trường hợp
// function guiThongBao(message, target) {
//     if( typeof target === 'undefined') {
//         console.log(`${message}`);
//         return;
//     }

//     if(typeof target === 'number') {
//         console.log(`${message}, ${target}`);
//         return;
//     }

//     console.log(`Target ko hợp lệ`);
// }

// guiThongBao("deploy xong")
// guiThongBao("deploy xong", 101)

//
// function timSo(arr) {
//     for(let i=0;i<arr.length;i++) {
//         if(arr[i] === 5) {break;}
//         console.log(arr[i]);
//     }
//     console.log("Đã xong");

// }

// timSo([1,4,5,2,1,0])

//Default parameters (giá trị mặc định)
//Khi người gọi ko truyền đủ tham số , JS tự động chuyển giá trị mặc định

// function dangNhap(user, pass, moiTruong = "staging") {
//     console.log(`${moiTruong} - Đăng nhập : ${user} - ${pass}`);
// }

// dangNhap("admin", "123456")
// dangNhap("admin", "1234567", "dev")
//Lưu ý : chỉ hoạt động tốt khi tham số mặc định nằm cuối, nếu tham số giữa bị thiếu , bạn bắt buộc truyền undefined hoặc null làm giữ chỗ

// function taoTestUser(ten, tuoi=25, email, vaiTro='Tester') {
//     console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
// }

//taoTestUser("neko", "neko@vn.com")
//neu muon bo qua tham so giua
// taoTestUser("neko2", undefined, "neko2@vn.com")

//Quy tắc : Luôn đặt tham số default ở cuối , nếu có nhiều hơn 3 tham số thì mình sẽ dùng option object

//REST PARAMETERS (...args) : nhận bao nhiêu tham số cũng được
//Dấu ... gom tất cả tham số vào 1 mảng

// function tongTien(...danhSachGia) {
//     //danhsachgia là 1 mảng
//     let tong = 0;
//     for(const gia of danhSachGia) {
//         tong+=gia
//     }
//     return tong
// }

// console.log(tongTien(100000));
// console.log(tongTien(1000, 2000, 4000, 5000));

//Option obj : Nếu 1 hàm có nhiều hơn 3 tham số , thay vì truyền các tham số lẻ tẻ dễ nhầm thứ tự-> gói tất cả vào 1 object
// Đây là pattern nâng cao hay sử dụng

//c1
// function taoUser(options) {
//     //bóc tách (destructuring) object ra từng biến riêng biệt
//     const {ten, tuoi = 25, email, vaiTro = 'tester'} = options
//     console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
// }

//taoUser({ ten:'neko', email: 'neko@vn.com'})

//c2
// function taoUser2({ten, tuoi = 25, email, vaiTro = 'tester'}) {
//     console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
// }
// taoUser2({ten: 'Neko2', email: 'neko2@gmail.com'})


// Destructuring và Spread operator
//1. Destructuring ( phân rã) : cú pháp cho phép bóc tách giá trị từ array hoặc object thành các biến riêng lẻ chỉ trong 1 dòng code
// const danhSach = ["admin", "123456", "staging"]
// const [user, pass, env] = danhSach
// console.log(user);
// console.log(pass);
// console.log(env);


// //Bỏ qua phần tử ko cần
// const [firstName, , city] = ["neko", 25, "hanoi"]

// console.log(firstName);
// console.log(city);

// const [a,b,c = "n/a"] = ["hello", "world"]
// console.log(c);

//Object destructuring
//Bóc tách thuộc tính qua tên object

//const response = {status : 200, body: "ok", headers: {}}

// const { status , body}= response
// console.log(status);
// console.log(body);

// //bóc tách + đổi tên biến :
// const {status : statusCode, body: noiDung} = response
// console.log(statusCode);
// console.log(noiDung);

// //giá trị mặc định + đổi tên
// const {ten, tuoi = 18, vaiTro: role="viewer"} = {ten: "neko"};
// console.log(ten);
// console.log(tuoi);
// console.log(role);


//destruc trong tham so ham
// function hienThiUser({ten, email, tuoi=19}) {
//     console.log(`${ten}, ${email}, ${tuoi}`);
// }

// hienThiUser({ten: "Neko", email: "abc@gmail.com"})

//destruct lồng (nested)

// const apiResponse = {
//     data: {
//         user: {name: "neko", email : "neko@123"},
//         token: "123"
//     },
//     status: 200
// }

// const {data: {user : {name, email}, token}, status} = apiResponse
// console.log(name);
// console.log(token);


//Khi chạy AT nhận được 1 ds KQ như sau :

// const testRuns = [
//     [ " login smoke ", {browser: "   chromium    ", env: "   staging   "}, "  PASS  "],
//     [ " checkout payment ", {browser: "   firefox    ", env: "   prod   "}, "  FAIL  "],
//     [ "  search product  ", {browser: "   webkit    ", env: "   staging   "}, "  PASS  "],
//     [ " ", {browser: "   chromium    ", env: "   dev   "}, "  PASS  "],
// ]

// function taoBaoCaoTest(item) {
//     let totalValid = 0, inValid = 0;
//     let pass = [], fail = [];

//     for(let i=0;i< item.length;i++) {
//         const [rawTestName, {browser, env} , rawStatus] = item[i];
//         testName = rawTestName.trim();
//         testBrowser = browser.trim();
//         testEnv = env.trim();
//         testStatus = rawStatus.trim();

//         if(testName.length === 0) {
//             inValid++;
//             continue;
//         }

//         if(testStatus !== 'PASS' && testStatus !== 'FAIL') {
//             inValid++;
//         }
//         if(testName!=='' && testStatus==='PASS') {
//             const resultPass = `${testName} - ${testBrowser} - ${testEnv}`
//             pass.push(resultPass);
//             totalValid++;
//         }
//         if(testName!=='' && testStatus==='FAIL') {
//             const resultFail = `${testName} - ${testBrowser} - ${testEnv}`
//             fail.push(resultFail)
//         }
//     }

//     return {
//         totalValid,
//         inValid,
//         pass,
//         fail
//     }  
// }

// console.log(taoBaoCaoTest(testRuns))
// Bài toán
// // Viết hàm taoBaoCaoTest(testRuns) để tạo báo cáo từ danh sách kết quả test.
// // Yêu cầu
// // - Dùng destructuring để bóc tách từng phần tử trong mảng.
// // - Gợi ý:
// //   const [rawTestName, { browser, env }, rawStatus] = item
// // - Tương ứng:
// //   + rawTestName: tên test thô
// //   + { browser, env }: thông tin môi trường chạy
// //   + rawStatus: trạng thái test thô
// // Rule xử lý
// // - Nếu testName rỗng thì tăng invalid và bỏ qua dòng đó.
// // - Nếu status không phải PASS hoặc FAIL thì tăng invalid và bỏ qua.
// // - Nếu dữ liệu hợp lệ:
// //   + Tạo chuỗi theo định dạng: testName - browser - env
// //   + Ví dụ: login smoke - chromium - staging
// //   + Nếu PASS thì đưa vào mảng passed.
// //   + Nếu FAIL thì đưa vào mảng failed.
// // Kết quả mong đợi
// // Hàm cần trả về dữ liệu theo dạng:
// // {
// //   totalValid: 3,
// //   invalid: 1,
// //   passed: [
// //     "login smoke - chromium - staging"
// //   ],
// //   failed: [
// //     "checkout payment - firefox - prod"
// //   ]
// // }


// const testRuns = [
//     [ " login smoke ", {browser: "   chromium    ", env: "   staging   "}, "  PASS  "],
//     [ " checkout payment ", {browser: "   firefox    ", env: "   prod   "}, "  FAIL  "],
//     [ "  search product  ", {browser: "   webkit    ", env: "   staging   "}, "  PASS  "],
//     [ " ", {browser: "   chromium    ", env: "   dev   "}, "  PASS  "],
// ]
// function taoBaoCaoTest(testRuns) {
//     const passed = [];
//     const failed = [];
//     let invalid = 0

//     for(const item of testRuns) {
//         const [rawTestName, { browser, env }, rawStatus] = item
//         const testName = rawTestName.trim();
//         const browserName = browser.trim();
//         const envName = env.trim();
//         const status = rawStatus.trim().toUpperCase()

//         if(!testName) {
//             invalid++;
//             continue;
//         }

//         if(status !== "PASS" && status !== "FAIL") {
//             invalid++;
//             continue;
//         }

//         const reportItem = `${testName} - ${browserName} - ${envName}`
//         if(status === "PASS") {
//             passed.push(reportItem)
//         } else {
//             failed.push(reportItem)
//         }
//     }

//     return {
//         totalValid: passed.length + failed.length,
//         invalid : invalid,
//         passed : passed,
//         failed: failed
//     };
// }

// console.log(taoBaoCaoTest(testRuns));

// const status3 = "DONE";
// if(!status3) {
//     console.log("invalid");
// } else if (status3 === "PASS") {
//     console.log("passed");
// } else {
//     console.log("failed");
// }


//Spread Operator - rải đều ra 
//Đặc tính là có dấu ... đặt trc tên biến của 1 array hoặc 1 obj để trải phẳng toàn bộ nội dung của nó ra . Thuộc tính trùng tên : bên phải ghi đè bên trái, spread ko sửa obj cũ mà 
//sẽ tạo object mới

// Chức năng : Sao chép và gộp mảng
//const mangGoc = [1,2,3]
// const mangSaoChep = [...mangGoc]
// mangSaoChep.push(9999)

// console.log(mangGoc);
// console.log(mangSaoChep);

//Gộp 2 mảng lại thành 1 
// const mang1 = ["A", "B"]

// const mang2 = ["C", "D"]
// const mangGop = [...mang1, ...mang2]
// console.log(mangGop);

//Chèn phần tử vào giữa
// [0, ... , 4, 5]
// const mangMoi = [0, ...mangGoc, 4, 5]
// console.log(mangMoi);


//Spread với object - Sao chép và ghi đè
// const configMacDinh = {
//     baseUrl: 'https://staging.neko.vn',
//     timeout : 30000,
//     headless: true,
//     retries: 2
// }

// const configProd = {
//     ...configMacDinh,
//     baseUrl: "https://neko.vn",
//     retries: 0
// }
// //console.log(configProd);

// const configDebug = {...configMacDinh, headless: false}
// console.log(configDebug)

//Spread trong tham số hàm
//const danhSachGia = [10000, 20000, 30000]
// Math.max ko nhận vào mảng , nhận tham số lẻ
//const giaMax = Math.max(danhSachGia)
// const giaMax = Math.max(...danhSachGia)

// console.log(giaMax);

//BT : Có dữ liệu như sau 
// const configMacDinh = {
//     baseUrl: 'https://staging.neko.vn',
//     timeout: 30000,
//     headless: true,
//     retries: 2
// }

// const configGhiDe = {
//     timeout: 10000,
//     headless: false
// }

// const tagsMacDinh = [" smoke ", " login  "]
// const tagsThem = ["  checkout   ", "   smoke   ", "  regression   "]
// const tocDoPhanHoi = [1200, 3400, 800, 1500]
// const tenSuitRaw = "  Payment Flow  "

//Yêu cầu : viết 1 hàm taoCauHinhChayTest()
//Dùng obj spread để tạo configCuoi tu configMacdinh và configGhide
//Dùng Array spread để gộp tagsMacdinh và tagsthem thành 1 mảng mới
//Sau đó xử lý mảng mới bằng cách bỏ tag rỗng , đổi về lowercase
//làm sạch tensuiteraw
//nếu tensuiteraw rỗng thì dùng mặc định là unknow-suite
//Tìm thời gian phản hồi lớn nhất dùng vs spreas vs Math.max
//Trả về object có dạng 
// Kết quả mong đợi
// {
//   suiteName: "Payment Flow",
//   config: {
//     baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging
//     timeout: 10000, // Thời gian chờ tối đa là 30 giây
//     headless: false, // Chạy trình duyệt ở chế độ không hiển thị giao diện
//     retries: 2,
//   },
//   tags: ["smoke", "login", "checkout", "regression"],
//   slowestRespone: 3400
// }


// function taoCauHinhChayTest() {
//     const configCuoi = { ...configMacDinh, ...configGhiDe }
//     const tagsGop = [...tagsMacDinh, ...tagsThem]
//     const tagsClean = []

//     for (let tag of tagsGop) {
//         let textClean = tag.trim().toLowerCase();

//         if(textClean === ""){
//             continue
//         }

//         if(!tagsClean.includes(textClean)) {
//             tagsClean.push(textClean)
//         }
     
//     }
//     console.log(tagsClean);
//     const suiteNameClean = tenSuitRaw.trim()
//     if (suiteNameClean === "") suiteNameClean = "unknow-suite"

//     const maxSpeed = Math.max(...tocDoPhanHoi)

//     return {
//         suiteNameClean,
//         configCuoi,
//         tagsClean,
//         maxSpeed
//     }
// }

// console.log(taoCauHinhChayTest());
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Function callback (Hàm gọi lại)
//Callback là 1 hàm A đc truyền vào làm tham số cho 1 hàm khác (hàm B) -> khi hàm B làm xong việc sẽ lôi hàm A ra để chạy
//Bản chất : hàm trong JS là first class citizen , quyền bình đẳng như 1 con số hay 1 chuỗi , nghĩa là ta có thể nhét nó vào biến, truyền đi khắp nơi hoặc return nó từ 1 hàm khác 
// nếu có () : chạy ngay
// nếu ko có () : gọi từ 1 hàm khác
//vdu bên dưới

// function quayLaiAn() {
//     console.log("Quay lại đây");
// }

// function choBanTrong(soDienThoaiCuaKhach) {
//     console.log('Đang dọn bàn...');

//     //đây là lúc hàm callback được gọi lại 
//     soDienThoaiCuaKhach()
// }

//Chú ý ko có dấu ngoặc () ở hàm gọi lại
// choBanTrong(quayLaiAn)

//function layDuLieuTest() {return "Dữ liệu test"}
// const ketQua = layDuLieuTest()
// console.log(ketQua);
// console.log( typeof ketQua);

// //TH : ko có ()
// const copyHam = layDuLieuTest
// console.log(copyHam);
// console.log(typeof copyHam);

//Bản thân : 1 hàm ko có return , sau khi chạy xong -> JS tự trả về giá trị mặc định là undefined
//Quy tắc nhớ : khi truyền callback luôn viết tên hàm trần ( ko có dấu ())
//Callback có tham số : hàm nhận callback có thể truyền dữ liệu ngược lại cho callback khi gọi

// function thongBaoKetQua(tenBaiTest, ketQua) {
//     console.log(`${tenBaiTest} - ${ketQua}`);
// }

// function chayTest(tenTest, callBack) {
//     console.log(`đang chạy ${tenTest}`);

//     const pass = tenTest.includes("login");
//     callBack(tenTest, pass ? "Chạy pass" : 'Chạy fail')
// }

// chayTest("login thành công", thongBaoKetQua)
// chayTest("đăng kí thiếu email", thongBaoKetQua)

// function inThongBao () {
//     console.log("Đã đợi xong");
// }

//c1
// setTimeout(inThongBao, 5000)

// //c2
// setTimeout(function() {
//     console.log("Đã đợi xong");
// }, 3000)

// //c3
// setTimeout(()=> {
//     console.log("Đã đợi xong");
// }, 3000)

//Ứng dụng thực tế : callback thường xảy ra ở các hàm xử lí array 
//Array callback methods
//Map : biến đổi mảng cũ thành 1 mảng mới, nhận vào 1 callback func, thường là có 3 tham số nhưng thực tế chỉ dùng 1 
// const mangMoi = mangcu.map((phantu, index,mangGoc)=>{
//     phantu = phantuhientai,
//     index = vị trí 0,1,2
//     mang goc
//     return giaTrimoi (bắt buộc phải return)})

// const giaSanPhamUI = [100000, 250000, 500000]
// const giaMoi = giaSanPhamUI.map((gia)=> {return gia * 2})
// console.log(giaMoi);

//Mảng object
// const users = [
//     {ho :"nguyen", ten: "neko"},
//     {ho: "tran", ten: "new"}
// ]

// const hoTen = users.map((u)=> {
//     return `${u.ho} ${u.ten}`
// })
// console.log(hoTen);


//Filter - Lọc phần tử thỏa mãn điều kiện
//Cú pháp : const mangLoc = mangGoc.filter((callBack)=> {
    //dieukien})
//->Nó sẽ check điều kiện : nếu return true - giữ , false - bỏ

// const sanPhamUI = [
//     {ten: "Chuột", gia: 150000, tonKho: true},
//     {ten: "Bàn phím", gia: 500000, tonKho: false},
//     {ten: "Màn hình", gia: 300000, tonKho: true},
//     {ten: "Tai nghe", gia: 200000, tonKho: true},
// ]
// // const mangMoi = []
// // for(let sanPham of sanPhamUI) {
// //     if(sanPham.tonKho) {mangMoi.push(sanPham)}
// // }
// // console.log(mangMoi);

// const mangMoi = sanPhamUI.filter((sanPham)=> {return sanPham.tonKho})
// console.log(mangMoi);

// const priceArr = sanPhamUI.filter((sanPham)=> {return sanPham.gia < 200000 && sanPham.tonKho})
// console.log(priceArr);

//Find() - Tìm phần tử đầu tiên thỏa mãn điều kiện 
//cú pháp : const phanTu = mang.find((phantu)=> điều kiện)

// const users = [
//     {id: 1, ten: "neko", role : "admin"},
//     {id: 2, ten: "mew", role : "tester"},
//     {id: 3, ten: "cat", role : "tester"},
// ]

// const mangMoi = users.find((user)=>  user.role==="admin")
// console.log(mangMoi);

// const userTester = users.find((user)=> user.role === 'tester')
// console.log(userTester);

//------BTVN ------------------------------------------------------------------------------------------------------------
//Object trong JS được truyền theo dạng tham chiếu
const input = {
    email: "            A@gmail.com        ",
    role: "Admin"
}

function normalize(data) {
    data.email = data.email.trim();
    data.role = data.role.toLowerCase()
}
function normalizeInput(input) {
    return {
        ...input,
        email: input.email.trim(),
        role: input.role.toLowerCase()
    }
}
function logOriginal(data) {
    console.log(data.email);
}

logOriginal(input)
normalize(input)
// normalizeInput(input)
logOriginal(input)

//Vấn đề normalize ko tạo object mới, nó sửa luôn input gốc. nếu chỗ khác vẫn nghĩ input là dữ liệu ban đầu thì sẽ lỗi logic

// function taoPayLoadDangNhap(formInput, options) {
//     //YC1 
//     let {username, password, role, rememberMe, device} = formInput;
//     //YC2
//     const {
//         defaultRole = "guest",
//         allowedRoles, minPasswordLength = 8,
//     } = options

//     const errors = []
//     //YC3
//     username = username.trim().toLowerCase();
//     password = password.trim();
//     role = role.trim().toLowerCase();
//     device = device.trim()
//     if(rememberMe === true || rememberMe === 'yes' || rememberMe === 'on') {
//         rememberMe = true
//     } 
//     {rememberMe = false}
//     if(role === "") {
//         role = defaultRole.toLowerCase()
//     }

//     const payload = {
//         username,
//         password,
//         role,
//         rememberMe,
//         device
//     }

//     //YC4
//     if(payload.username === '') {
//         errors.push("Username không được bỏ trống")
//     }
//     if(payload.username.includes(" ")) {
//         errors.push("Username không có khoảng trắng ở giữa")
//     }
//     if(payload.password.length < minPasswordLength) {
//         errors.push(`Password phải có ít nhất ${minPasswordLength}`)
//     }
//     if(!allowedRoles.includes(payload.role)) {
//         errors.push("Role không nằm trong danh sách cho phép")
//     }

//     return {
//         payload,
//         errors,
//         isValid : errors.length === 0,
//     }

// }

// const loginOptions = {
//     defaultRole: "guest",
//     allowedRoles: ["admin", "tester", "viewer", "guest"],
//     minPasswordLength: 8
// };

// const loginTestData = [
//     {
//         name: "Case 1 - Hợp lệ cơ bản",
//         formInput: {
//             username: "  Neko_Admin  ",
//             password: "  12345678  ",
//             role: " tester ",
//             rememberMe: "yes",
//             device: "  chrome-win11  "
//         }
//     },
//     {
//         name: "Case 2 - Role rỗng, phải dùng defaultRole",
//         formInput: {
//             username: "  guest_user  ",
//             password: "  abcdefgh  ",
//             role: "   ",
//             rememberMe: "no",
//             device: " firefox "
//         }
//     },
//     {
//         name: "Case 3 - Username rỗng",
//         formInput: {
//             username: "    ",
//             password: "12345678",
//             role: "tester",
//             rememberMe: "yes",
//             device: "chrome"
//         }
//     },
//     {
//         name: "Case 4 - Username có khoảng trắng ở giữa",
//         formInput: {
//             username: "neko admin",
//             password: "12345678",
//             role: "tester",
//             rememberMe: "yes",
//             device: "chrome"
//         }
//     },
//     {
//         name: "Case 5 - Password quá ngắn",
//         formInput: {
//             username: "valid_user",
//             password: "123",
//             role: "tester",
//             rememberMe: true,
//             device: "chrome"
//         }
//     },
//     {
//         name: "Case 6 - Role không hợp lệ",
//         formInput: {
//             username: "valid_user",
//             password: "12345678",
//             role: "manager",
//             rememberMe: "on",
//             device: "chrome"
//         }
//     },
//     {
//         name: "Case 7 - rememberMe là boolean true",
//         formInput: {
//             username: "admin01",
//             password: "abcdefgh",
//             role: "admin",
//             rememberMe: true,
//             device: "edge"
//         }
//     },
//     {
//         name: "Case 8 - rememberMe là chuỗi lạ",
//         formInput: {
//             username: "viewer01",
//             password: "abcdefgh",
//             role: "viewer",
//             rememberMe: "maybe",
//             device: "safari"
//         }
//     }
// ];

// for(let i =0; i< loginTestData.length;i++) {
//     console.log(loginTestData[i].name);
//     console.log(taoPayLoadDangNhap(loginTestData[i].formInput, loginOptions));

// }