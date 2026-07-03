//export function :

export function taoEmailNgauNhien() {
    return `test_${Date.now()}@gmail.com`
}

export const MAX_RETRY = 3
export const BASE_URL = 'http/abc'


function hamBiMat () {
    return 'ok'
}

//Default export ( 1 file chỉ có 1 default export)
//Dành cho file chỉ chứa 1 thứ quan trọng, mỗi file chỉ có 1 export default
//Khi nhập khẩu ko cần dấu ngoặc nhọn {} và ko cần đổi tên
//Có 2 cách để khai báo export default

//C1
// class LoginPage {
//     moTrangDangNhap() {
//         return "abc"
//     }
// }

// // Export cuối file
// export default LoginPage

//C2
export default class LoginPage {
    moTrangDangNhap() {
        return "abc"
    }
}

