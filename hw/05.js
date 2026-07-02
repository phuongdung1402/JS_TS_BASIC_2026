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
    let invalid = 0
    let isValid = true
    let error = []
    let pass = []
    const rememberBoolean = ["true", "on", "yes"]

    let { defaultRole, allowedRoles, minPasswordLength } = options
    if (!defaultRole) { defaultRole = 'guest' }
    if (!minPasswordLength) { minPasswordLength = 8 }

    for (const data of form) {
        let { name, formInput: { username, password, role, rememberMe, device } } = data
        const nameChuanHoa = username.trim().toLowerCase()
        const passChuanHoa = password.trim()
        const roleChuanHoa = role.trim().toLowerCase()
        const deviceChuanHoa = device.trim()
        let rememberChuanHoa = rememberMe

        if (typeof rememberMe === 'string') { rememberChuanHoa = rememberMe.trim().toLowerCase() }

        // if(rememberMe === true || rememberMe === 'yes' || rememberMe === 'on') {
        //     rememberChuanHoa = true
        // } else {
        //     rememberChuanHoa = false
        // }

        if (nameChuanHoa === '' || nameChuanHoa.includes(' ')) { invalid++ }
        if (passChuanHoa.length < minPasswordLength) { invalid++ }
        if (!allowedRoles.includes(roleChuanHoa)) { invalid++ }
        if (rememberBoolean.includes(rememberChuanHoa)) { rememberChuanHoa = true }
        else { rememberChuanHoa = false }

        const payload = { nameChuanHoa, passChuanHoa, roleChuanHoa, rememberChuanHoa, deviceChuanHoa }

        if (invalid != 0) {
            error.push(payload)
        } else {
            pass.push(payload)
        }
        invalid = 0
    }
    return {
        isValid,
        pass,
        error
    }
}

console.log(taoPayloadDangNhap(loginTestData, loginOptions))