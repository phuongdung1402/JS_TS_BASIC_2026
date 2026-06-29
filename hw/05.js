// const loginOptions = {
//     defaultRole: "guest",
//     allowedRoles: ["admin", "tester", "viewer", "guest"],
//     minPasswordLength: 8,
// };

// const loginTestData = [
//     {
//         name: "Case 1 - Hợp lệ cơ bản",
//         formInput: {
//             username: "  Neko_Admin  ",
//             password: "  12345678  ",
//             role: " tester ",
//             rememberMe: "yes",
//             device: "  chrome-win11  ",
//         },
//     },
//     {
//         name: "Case 2 - Role rỗng, phải dùng defaultRole",
//         formInput: {
//             username: "  guest_user  ",
//             password: "  abcdefgh  ",
//             role: "   ",
//             rememberMe: "no",
//             device: " firefox ",
//         },
//     },
//     {
//         name: "Case 3 - Username rỗng",
//         formInput: {
//             username: "    ",
//             password: "12345678",
//             role: "tester",
//             rememberMe: "yes",
//             device: "chrome",
//         },
//     },
//     {
//         name: "Case 4 - Username có khoảng trắng ở giữa",
//         formInput: {
//             username: "neko admin",
//             password: "12345678",
//             role: "tester",
//             rememberMe: "yes",
//             device: "chrome",
//         },
//     },
//     {
//         name: "Case 5 - Password quá ngắn",
//         formInput: {
//             username: "valid_user",
//             password: "123",
//             role: "tester",
//             rememberMe: true,
//             device: "chrome",
//         },
//     },
//     {
//         name: "Case 6 - Role không hợp lệ",
//         formInput: {
//             username: "valid_user",
//             password: "12345678",
//             role: "manager",
//             rememberMe: "on",
//             device: "chrome",
//         },
//     },
//     {
//         name: "Case 7 - rememberMe là boolean true",
//         formInput: {
//             username: "admin01",
//             password: "abcdefgh",
//             role: "admin",
//             rememberMe: true,
//             device: "edge",
//         },
//     },
//     {
//         name: "Case 8 - rememberMe là chuỗi lạ",
//         formInput: {
//             username: "viewer01",
//             password: "abcdefgh",
//             role: "viewer",
//             rememberMe: "maybe",
//             device: "safari",
//         },
//     },
// ];


// function taoPayloadDangNhap(form, options) {
//     const rememberBoolean = ["true", "on", "yes"]
//     //YC2 : Dùng object destructuring + default value để lấy dữ liệu từ options
//     let { defaultRole = 'guest', allowedRoles, minPasswordLength = 8 } = options

//     let error = []
//     let isValid = true
//     //YC1 : Dùng object destructuring để lấy dữ liệu từ formInput.
//     let { username, password, role, rememberMe, device }  = form
//     //YC3 : Chuẩn hóa dữ liệu
//     username = username.trim().toLowerCase()
//     password = password.trim()
//     role = role.trim().toLowerCase()
//     if (role === '') { role = defaultRole }
//     device = device.trim()

//     if ((typeof rememberMe === 'string' && rememberBoolean.includes(rememberMe)) || rememberMe === true) {
//         rememberMe = true
//     } else {
//         rememberMe = false
//     }

//     //YC 4 : Kiểm tra hợp lệ
//     if (username === '' || username.includes(' ')) { error.push('Username rỗng hoặc chứa khoảng rỗng'), isValid = false }
//     if (password.length < minPasswordLength) { error.push('Password length dưới 8 kí tự'), isValid = false }
//     if (!allowedRoles.includes(role)) { error.push('Role không nằm trong allowedRoles'), isValid = false }

//     const payload = { username, password, role, rememberMe, device }

//     return{
//         isValid,
//         payload,
//         error
//     }
// }
// for (let i = 0; i < loginTestData.length; i++) {
//     console.log(loginTestData[i].name)
//     console.log(taoPayloadDangNhap(loginTestData[i].formInput, loginOptions))
// }
//---------------------------------------------------------------------------------------------------------------------
const testCaseConfig = {
  minPriority: 1,
  maxPriority: 5,
};

const rawRows = [
  [" TC_LOGIN_001 ", "login", "1", " smoke ", "active"],
  ["TC_LOGIN_001", "login", "2", "regression", "active"],
  ["TC_SEARCH_002", "search", "0", "smoke", "active"],
  ["TC_CART_003", "", "3", "checkout", "inactive"],
  ["TC_PAY_004", "payment", "2", " critical ", "ACTIVE"],
  ["TC_ORDER_005", "order", "5", "sanity", "inactive"],
  ["TC_ORDER_006", " order ", "4", " SANITY ", "active"],
  ["LOGIN_007", "login", "2", "smoke", "active"],
  ["TC_USER_008", "user", "6", "regression", "active"],
  ["TC_API_009", "api", "3", "api", "disabled"],
  ["TC_API_010", "api", "2", " api ", "active"],
  ["TC_API_010", "api", "2", " api ", "active"],
  ["TC_REPORT_011", "report", "1", " nightly ", "INACTIVE"],
  [" TC_EMPTY_012 ", "   ", "2", "misc", "active"],
];

function chuanHoaDanhSachTest(rawRows, config){
    let validCases = [] , invalidCase = [] , duplicateId = [] , seenId = []

    for(let i=0;i<rawRows.length;i++) {
        let invalid = 0 
        //YC1 : Dùng array destructuring để bóc từng cột.
        let [id, module, priority, tag, status] = rawRows[i];
        //YC2: Chuẩn hóa
        id = id.trim().toUpperCase()
        module = module.trim().toLowerCase()
        priority = parseInt(priority)
        tag = tag.trim().toLowerCase()
        status = status.trim().toLowerCase()

        let raw = {id, module, priority , tag, status} 

        if(!id.startsWith('TC_', 0)) {invalid++}
        if(module === '') {invalid++}
        if(priority < config.minPriority || priority > config.maxPriority) {invalid++}
        if(status !== 'active' && status !== 'inactive') { invalid++ }

        let isDuplicate = false
        for(let j=0;j<seenId.length;j++) {
            if(id === seenId[j]) {
                invalid++
                duplicateId.push(id)
                isDuplicate = true
                break;
            }
        }
     
        if(!isDuplicate) {
            seenId.push(id)
        }
        
        if(invalid!=0) {invalidCase.push(raw)}
        else {validCases.push(raw)}


        
    }

    return {
            validCases,
            invalidCase,
            summary : {
                total : rawRows.length,
                valid: validCases.length,
                invalid: invalidCase.length,
                duplicateId
            }
        }
}

console.log(chuanHoaDanhSachTest(rawRows, testCaseConfig))