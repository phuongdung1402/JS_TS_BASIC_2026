//Record<K,T>
//Syntax của record lầ sử dụng generic Record<K,T>
//Dùng để tạo ra 1 obj mà ở đó cta biết rõ kiểu của key và kiểu của giá trị
//Cách sử dụng : 
// type DiemSo = Record<string, number>
// const lop1A : DiemSo= {
//     an : 2,
//     nam : 9
// }

//Cách sử dụng 2 : Dùng record để bắt lỗi thiếu sót
//Hệ thống có 3 vai trò (role) : admin, user, guest -> muốn quy định tiêu đề hiển thị cho từng vai trò

// interface RoleTitle {
//     admin: string,
//     user: string,
//     guest: string
// }

// const roleConfig : RoleTitle = {
//     admin : 'Quan tri vien',
//     user: 'Nguoi dung',
//     guest: 'Khach'
// }

// type UserRole = 'admin' | 'user' | 'guest'

// const roleConfig2 : Record<UserRole, string> = {
//     admin: 'Quan tri vien',
//     user: 'Nguoi dung',
//     guest: 'Khach'
// }
//Interface : khi thêm role mới -> sửa ở interface , object
//Cơ chế báo lỗi : báo ở object nếu thiếu field
//Ràng buộc : chỉ ép key phải đúng tên


//Record + union type : sửa 1 nơi union type -> obj tự báo lỗi
//Báo ở tất cả obj dùng ở record đó
//Ép đủ tất cả key trong union

//Tiêu chí : khi nào dùng interface và Record<>
//Các key (property) : 
//Interface : key phải khác nhau (User: phải có id, name, email,...)
//Record :giống nhau (danh sách điểm số, config)

//Gía trị : Interface mỗi dòng 1 kiểu , Record : tất cả giá trị cùng 1 kiểu
//Mục đích : interface mô tả 1 đối tượng cụ thể, Record : mô tả 1 bộ sưu tập ( từ điển , map, config)

//Chạy lint : kiểm tra việc biên dịch code TS có thừa thiếu hay ko đúng convention nào ko

//Record<K,V> : tạo 1 object có key nằm trong nhóm K, và giá trị tất cả đều là kiểu V
//------------------------------------------------------------------------------------------------------------------


//Partial<T>
//Gỉa sử có 1 interface 
interface User {
    id: number,
    name: string,
    email : string,
    age: number
}

//Viết 1 hàm sửa thông tin 
// function updateUser(id:number, newData: User) {
//     console.log(`Update user ${id}:`, newData);
// }

// đảm bảo truyền đúng data dạng User
// updateUser(1, {name: 'An'})

//Sử dụng partial ( 1 phần ) : copy cái khuôn type cũ (User) nhưng sẽ làm cho tất cả thuộc tính trở thành optional
function updateUserNew(id: number, newData: Partial<User>) {
    console.log(`Update user ${id}: `, newData);
}
console.log(updateUserNew(1, {name : 'Anh'}))
console.log(updateUserNew(1, {name: 'An', age: 30}))

//Record cũng có thể kết hợp vs partial . trong các file config hoặc state management ( quản lí trạng thái )
type BrowserName = "chromium" | "firefox" | "webkit"
interface BrowserConfig {
    headless : boolean;
    slowMo: number
}

//Case 1: Tạo ra 1 danh sách có thể thiếu 1 vài trình duyệt
const mySettings : Partial<Record<BrowserName, BrowserConfig>> = {
    firefox: {
        headless: true,
        slowMo: 200
    }
}
//Trong TH này nếu dùng Record : Record<BrowserName, BrowserConfig> : nó sẽ ép phải có toàn bộ cấu hình của tất cả trình duyệt

//Case 2 : Hoặc danh sách phải đủ các trình duyệt, nhưng cấu hình bên trong có thể thiếu
const mySettings2 : Record<BrowserName, Partial<BrowserConfig>> = {
    chromium: {slowMo: 200},
    firefox: {headless: true},
    webkit : {},
}

//Case 3 : Tạo danh sách thiếu trình duyệt hoặc config cũng đc
const mySettings3 : Partial<Record<BrowserName, Partial<BrowserConfig>>> = {
    chromium: {slowMo: 200}
}