//Typescript là gì :
//TS = JS + Hệ thống kiểu dữ liệu(còn gọi là type system)

// function tinhTong(a : number,b: number) : number {
//     return a+b
// }
// console.log(tinhTong(3,9));

//TS hoạt động như nào
//Kiểm tra lỗi ở thời điểm như sau : 
//b1 : viết code (IDE - VSC)
//b1-1 : TS language server -> chạy ngầm trong IDE
//Gạch đỏ ngay khi mình gõ kiểu sai . Gợi ý code
//Đây chỉ là bước IDE kiểm tra (chưa phải lúc biên dịch)
//b2 : đây là bước biên dịch (chạy lệnh tsc hoặc npm run build)
//(có type .ts)
//b3 : run time -> trình duyệt /node js chạy file .js này

//Typescript: bộ kiểm tra/biên dịch typescript cung cấp lệnh tsc
//tsx : công cụ giúp chạy trực tiếp file .ts trong node js 

//npm init -y -> tạo file package.json
//npm install -D typescript tsx
//để chạy file ts : npx tsx tenfile.ts

//npx tsc tenfile.ts -> để tạo ra file .js từ file ts

//tạo folder .vscode ở root
//settings.json

//Các kiểu dữ liệu cơ bản :
// tenbien : Kiểu dữ liệu = Gía trị

// let tuoi : number = 25;
// let hoTen : string = "neko"
// let daXoa : boolean = true

//null
// let chiLaNull : null = null;
// chiLaNull = {name: 'neko'}
//-> biến này luôn luôn là null , vì vậy hầu như ko có tác dụng thực tế

//union type : | : phân chia giữa 2 loại type
// let apiResponse : string | null = null ;
// apiResponse = "dữ liệu từ server"

//Các cách khai báo undefined trong ts 
//1.khai báo union
// let phone : string | undefined;
// console.log(phone);
// phone = "abc123"

//2. optional param trong func : dùng dấu ?
// function chao(name: string, lop?: string) {
//     //lop : sẽ tương đương vs string | undefined
//     console.log(`Xin chao ${name}`);
//     if(lop) {
//         console.log(`lop ${lop}`);
//     }
// }

// chao("neko")
// chao("neko", "1234")

//3. optional property trong object
// interface HocSinh {
//     ten: string;
//     email? : string;
//     //tương đương string | undefined
// }

// let hs : HocSinh = {
//     ten: "neko"
// }
// console.log(hs.email);

// let hocSinhDiHoc : HocSinh | null = null
// hocSinhDiHoc = {ten: 'Dihoc'}
// console.log(hocSinhDiHoc)
// hocSinhDiHoc = null
// console.log(hocSinhDiHoc)

//Nếu dữ liệu có sử dụng undefined : dữ liệu có thể chưa tồn tại ko đc truyền 
//Nếu dữ liệu có sử dụng null : tôi biết biến này, nhưng hiện tại ko có


//Type inference : typescript tự suy luận
// let tuoi3 : number = 30;
// let tuoi4 = 30;

// let danhSach1 = ["a", "b"]


//Union types - biến chứa nhiều kiểu 
//Khi 1 biến có thể mang nhiều kiểu dữ liệu khác nhau, dùng dấu | 
//Nói đơn giản union type giúp bạn liệt kê trc các khả năng hợp lệ , để TS chặn giá trị sai ngay lúc viết code
//Union type đặc biệt hữu ích ở 3 nhóm 
//Giới hạn lựa chọn đầu vào : browser, environment, role, action
//Mô tả trạng thái test/api rõ ràng : pass/fail/skip

// let maSanPham : string | number
// //Thực tế là hay gặp UI là string , id trong db/API là number
// maSanPham = 'SP022'
// maSanPham = 1

//Ứng dụng api có thể trả về null hoặc data
//null : đã gọi api rồi nhưng ko có dữ liệu
// let apiData : string | null = null
// apiData = 'Dữ liệu server'

//hàm tìm kiếm có thể thấy hoặc ko tìm thấy
// type User = {name : string}
// //undefined nghĩa là : ko tìm thấy phần tử phù hợp
// let userTimDuoc : User | undefined

// userTimDuoc = {name: 'abc'}

// userTimDuoc = undefined


function hienThiMaDonHang(orderId: string| number) {
    if(typeof orderId === 'string') {
        return orderId.toUpperCase()
    }
    return orderId.toString()
}

//Literal string union : chọn trong danh sách cố định
//Nghĩa là thay vì string quá rộng ta liệt kê chính xác giá trị đc phép

// type TestStatus = "passed" | "failed" | "skipped" | "pending"

// let currentTest : TestStatus 

// type UserRole = "admin" | "editor" | "viewer"

// function loginAs (role: UserRole) {
//     console.log('Login with', role);
// }
// loginAs('admin')

//Any / unknow
//Any : bỏ qua kiểm tra kiểu 

// let duLieuTuUI : any = "admin"
// console.log(duLieuTuUI.toFixed(2));
//Bạn truyền method sai , truyền sai. TS vẫn cho qua -> ko khác gì JS
//Hạn chế tối đa , chỉ dùng khi migrate code cũ

//unknow : Không biết kiểu , nên phải kiểm tra trc 
//unknow : cũng nhận đc mọi giá trị giống any , nhưng khác là TS ko cho dùng trực tiếp nếu bạn chưa kiểm tra kiểu

// let giaTriTuFile : unknown = 'admin@example.com'
// if(typeof giaTriTuFile === 'string') {
//     console.log(giaTriTuFile.toLocaleLowerCase());    
// }

//Định kiểu cho mảng (array)
//syntax :
//string [] : mảng chỉ chứa string 
//number [] : mảng chỉ chứa number
//User[] : mảng chỉ chứa object đúng shape User

// const browserName = ['chromium']

// const scores : number [] = [8,9]
// scores.push("11") -> báo lỗi ngay

//Mảng hỗn hợp : dùng union
// const csvRow: (string | number | null)[] = ["neko", 25, null, "admin"] 
//Hạn chế sử dụng mảng hỗn hợp


//tuple : Mảng có cấu trúc cố định
//tuple: là mảng có số lượng phần tử và kiểu từng vị trí cố định
// const coordinate : [number, number] = [10.3 , 30.2]
// const loginPair : [string, string] = ['admin@em', '123']
// type HeaderPair = [string, string]

// const header : HeaderPair[] = [
//     ["Authorization", "Beaer token 123"], 
//     ["Content-type", "application/json"]
// ]

//Thuộc tính readonly trong mảng (chỉ đọc , ko sửa dữ liệu)
// const testRoles : readonly string [] = ["admin", "editor"]
// console.log(testRoles[0]);

// //Các method dùng trong array (giống với js)
// type ApiUser = {
//     id: number;
//     email: string;
//     role: "admin" |"viewer";
//     enabled: boolean;
// }

// const usersFromApi : ApiUser[] = [
//     {
//     id: 1,
//     email: 'admin@example.com',
//     role: 'admin',
//     enabled: true
// },
// {
//     id: 2,
//     email: 'viewer@example.com',
//     role: 'viewer',
//     enabled: false
// },
// {
//     id: 3,
//     email: 'disabled@example.com',
//     role: 'viewer',
//     enabled: true
// }
// ]
// const emails = usersFromApi.map((user) => user.email)
// console.log(emails);

// const enabledUsers = usersFromApi.filter((user)=> user.enabled) 
// console.log(enabledUsers);

// //Định kiểu cho object
// //inline type - kiểu trực tiếp
// const user : {email: string; password: string} = {
//     email: 'abc',
//     password: '123'
// }

//type alias - đặt tên shape cho object
//type giúp tên shape của object để tái sử dụng

//Interface
// type CreateUserInput = {
//     email: string;
//     phone?: string
// }

// const userA1 : CreateUserInput = {
//     email: "abc",
// }

// //Định kiểu dữ liệu cho hàm
// function cong(a: number, b: number) : number {
//     return a+b;
// }

// function taoLoiChao(ten: string) : string {
//     return `Xin chao ${ten}`
// }

// //void : hàm ko trả về giá trị nào có ý nghĩa, giống việc làm rất nhiều action nhưng ko trả ra kết quả
// function logStep(message: string) : void {
//     console.log(`[STEP] ${message}`); 
// }

// async function clickButton(selector: string) : Promise<void> {}
// async function layTieuDe() : Promise<string> {
//     return 'trang dashboard'
// }

// function mocChoDoi(selector: string, timeout?:number) : void {
//     const ms = timeout ?? 5000 // ko truyền thì mặc định là 5000
//     console.log(`Cho ${selector} toi da ${ms}`);
// }

// mocChoDoi('abc')
// mocChoDoi('abc', 20000)