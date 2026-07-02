//Có thể export cái gì
//export hàm, class, biến, hàng số, object, mảng
//Có 2 kiểu export
//Named export ( xuất nhỏ lẻ - theo tên)
//Dành cho file chứa nhiều thứ muốn chia sẻ, khi nhập khẩu (import) bạn bắt buộc phải dùng dấu ngoặc {} và gọi đúng tên


// import { taoEmailNgauNhien , MAX_RETRY, BASE_URL} from "./helper";
// import { taoEmailNgauNhien as taoEmail } from "./helper";
// const email = taoEmailNgauNhien()
// console.log(email);
// console.log(BASE_URL);

// const email2 = taoEmail()
// console.log(email2);

// console.log(MAX_RETRY);

// import LoginPage from "./helper";
//..có thể đổi tên 
// import TrangDangNhap from './helper'

// const loginPage = new LoginPage()
// const TrangDangNhap = new TrangDangNhap()

//có thể import tất cả named export từ file vào 1 object
import * as Helpers from "./helper"
console.log(Helpers.MAX_RETRY);


//có thể import mix ( Default / named : trên cùng 1 dòng)
import LoginPage , {BASE_URL} from "./helper";