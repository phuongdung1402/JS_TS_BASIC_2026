const loginOptions = {
    defaultRole: "guest",
    allowedRoles: ["admin", "tester", "viewer", "guest"],
    minPasswordLength: 8,
};

const loginTestData = [
    {
        name: "Case 1 - Hợp lệ cơ bản",
        formInput: {
            username: "  Neko_Admin  ",
            password: "  12345678  ",
            role: " tester ",
            rememberMe: "yes",
            device: "  chrome-win11  ",
        },
    },
    {
        name: "Case 2 - Role rỗng, phải dùng defaultRole",
        formInput: {
            username: "  guest_user  ",
            password: "  abcdefgh  ",
            role: "   ",
            rememberMe: "no",
            device: " firefox ",
        },
    },
    {
        name: "Case 3 - Username rỗng",
        formInput: {
            username: "    ",
            password: "12345678",
            role: "tester",
            rememberMe: "yes",
            device: "chrome",
        },
    },
    {
        name: "Case 4 - Username có khoảng trắng ở giữa",
        formInput: {
            username: "neko admin",
            password: "12345678",
            role: "tester",
            rememberMe: "yes",
            device: "chrome",
        },
    },
    {
        name: "Case 5 - Password quá ngắn",
        formInput: {
            username: "valid_user",
            password: "123",
            role: "tester",
            rememberMe: true,
            device: "chrome",
        },
    },
    {
        name: "Case 6 - Role không hợp lệ",
        formInput: {
            username: "valid_user",
            password: "12345678",
            role: "manager",
            rememberMe: "on",
            device: "chrome",
        },
    },
    {
        name: "Case 7 - rememberMe là boolean true",
        formInput: {
            username: "admin01",
            password: "abcdefgh",
            role: "admin",
            rememberMe: true,
            device: "edge",
        },
    },
    {
        name: "Case 8 - rememberMe là chuỗi lạ",
        formInput: {
            username: "viewer01",
            password: "abcdefgh",
            role: "viewer",
            rememberMe: "maybe",
            device: "safari",
        },
    },
];


function taoPayloadDangNhap(form, options) {
    // let invalid = 0
    let isValid = true
    // let payload = ''
    let error = []
    let pass = []
    const rememberBoolean = ["true", "on", "yes"]
    let rememberChuanHoa =''

    
    //YC2 : Dùng object destructuring + default value để lấy dữ liệu từ options
    let { defaultRole, allowedRoles, minPasswordLength } = options
    // if (!defaultRole) { defaultRole = 'guest' }
    // if (!minPasswordLength) { minPasswordLength = 8 }


    for (const data of form) {
        //YC1 : Dùng object destructuring để lấy dữ liệu từ formInput.
        let { name, formInput: { username, password, role, rememberMe, device } } = data
        //YC3 : Chuẩn hóa dữ liệu
        const nameChuanHoa = username.trim().toLowerCase()
        const passChuanHoa = password.trim()
        let roleChuanHoa = role.trim().toLowerCase()
        if(roleChuanHoa === '') {isValid = false, roleChuanHoa = defaultRole}
        const deviceChuanHoa = device.trim()
    
        if(typeof rememberMe === 'string') {
            isValid = false
            rememberChuanHoa = rememberBoolean.includes(rememberMe) ? true : false
        } else {
            rememberChuanHoa = rememberMe
        }

        //if (typeof rememberMe === 'string') { rememberChuanHoa = rememberMe.trim().toLowerCase() }

        // if(rememberMe === true || rememberMe === 'yes' || rememberMe === 'on') {
        //     rememberChuanHoa = true
        // } else {
        //     rememberChuanHoa = false
        // }
        //YC 4 : Kiểm tra hợp lệ
        if (nameChuanHoa === '' || nameChuanHoa.includes(' ')) { isValid = false }
        if (passChuanHoa.length < minPasswordLength) { isValid = false }
        if (!allowedRoles.includes(roleChuanHoa)) { isValid = false }
        // if (rememberBoolean.includes(rememberChuanHoa)) { rememberChuanHoa === true }
        // else { rememberChuanHoa === false }

        const payload = {nameChuanHoa , passChuanHoa, roleChuanHoa, rememberChuanHoa, deviceChuanHoa  }
        const {username, password, role, rememberMe, device } = payload
        //let result = { isValid , payload : {nameChuanHoa , passChuanHoa, roleChuanHoa, rememberChuanHoa, deviceChuanHoa  }}

        if (!isValid) {
            error.push(payload)
        } else {
            pass.push(payload)
        }
        isValid=true
    }
    return {
        pass,
        error
    }
}

console.log(taoPayloadDangNhap(loginTestData, loginOptions))