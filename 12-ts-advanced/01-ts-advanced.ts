//typescript type system : typeof, keyof, as & Generic
//Literal type : kiểu giá trị cụ thể
//Trong TS : String là tập hợp rất nhiều chuỗi kí tự khác nhau
//(literal type): là 1 tập hợp chỉ chứa duy nhất 1 chuỗi ( đc viết trong literal type)


// let myString : string;
// myString = "dev"
// myString = "prod"

//literal type(khắt khe hơn)
// let myEnv : "dev"
// myEnv = "dev"
// myEnv = "prod"
//Biến mà chỉ lưu đc 1 giá trị thì khác gì hằng số const()

//Sức mạnh nằm ở union types
//code cực kì an toàn, ko bh sợ gõ sai chính tả (dev hay devvv) hay truyền nhầm giá trị lạ vào hệ thống

// type TrafficLight = "red" | "yellow" | "green"
// function checkLight(color: TrafficLight) {
//     if(color ==='red') {
//         console.log('Dung lai');
//     }
// }

// checkLight('')

//Type assertion (as)
//Trong TS as gọi là type assertion
//Lưu ý : as chỉ thay đổi cách nhìn của TS ko thay đổi dữ liệu thật khi chạy .
//Value Space (thực tế) : dữ liệu y nguyên, số 5 vẫn là số 5
//Type space (bản vẽ) : bạn dùng as để gán 1 nhãn mới cho biến đó, vdu bảo TS là dừng coi nó là số mà coi là chuỗi đi.

// const soNam : number = 5
// //dùng as để nói vs TS : hãy coi 1 biến dưới đây là string
// const soNamNew = soNam as unknown as string
// console.log(typeof soNamNew); //vẫn là number 
// console.log(soNamNew.toUpperCase());

//TH sử dụng
//TH1 : Nhận diện dữ liệu từ hộp đen
// interface UserData {
//     id: number;
//     email: string
// }
// const apiResponse : any = await fetchUserData()
//ko biết đc kiểu dữ liệu đầu ra là gì -> coi là any
//để ép TS biết kiểu dữ liệu để chúng ta có thể có gợi ý khi code

// const user = apiResponse as UserData
// user.id

//Có sự khác nhau giữa : type và as type . 
//2 thứ khác nhau về mặt cú pháp
//: type -> const tenBien : UserData = apiResponse -> type chỉ dùng khi khai báo biến (có tên biến)
//: as type -> dùng đc ở bất kì nơi nào có giá trị (ko cần tên)
//(apiResponse as userData).email
//RenderUser(await fetchUserData() as UserData)
//(await fetchUserData() as UserData).email
//Đây là ví dụ giả định fetchUserData() trả về any (fetch(), axios().get()) ko tự động có type
//nếu hàm đã có kiểu trả về rõ ràng (Promise<Userdata> )ko cần gọi as , TS đã biết kiểu từ đầu

//DOM /Browser API thư viện thứ 3 ko có type, type sai


//TH2 : as const - khóa cứng dữ liệu
// const config = {
//     method: 'POST',
//     timeout: 5000
// }

//Rủi ro có thể bị gán lại thành giá trị sai logic
// config.method = 'GET'

//Ta sẽ dùng as const -> biến kiểu dữ liệu thành literal type
// const config = {
//     method: 'POST',
//     timeout: 5000
// } as const

// let method = 'POST' as const
// method = 'GET'
//Gán lại sẽ bị lỗi
//as hay dùng vs obj , để khóa cứng giá trị của obj

//Typeof & Keyof
//Value space (thế giới thật) :biến const, let, hàm function, đối tượng {}
//Type space (bản vẽ) : tồn tại trong TS ( Gọi là type, interface)
//Để kết nối 2 thế giới trên : TS dùng typeof

//typeof trong JS 
// const user = {name : 'Neko'}
// console.log(typeof user);

//type of trong thế giới kiểu 
//nó đóng vai trò là cây cầu giúp scan 1 biến ở thế giới thật để tạo ra bản vẽ (type) tương ứng

// type UserType = typeof user
//ko thể dùng type gán bằng const đc , bắt buộc phải dùng câu nối là type
//Trong JS/TS : hàm (function) cũng là 1 biến bth (first class citizen)

// function tinhTong(a: number,b: number) {
//     return a+b
// }

// type MyType = typeof tinhTong

//keyof chỉ tồn tại ở thế giới kiểu (type space)
//nhiệm vụ : lấy ra danh sách các key của 1 type

// type Product = {
//     id: number,
//     price: number
// }
// type ProductKey = keyof Product

// const COLORS = {
//     red: '#FF0000',
//     green : '#00FF00',
//     blue: '#0000ff'
// } as const

//Mục tiêu muốn tạo ra 1 type ColorName = 'red'|'green'|'blue'

//dùng typeof -> biến value color thành type
// type ColorType = typeof COLORS
// type ColorName = keyof ColorType
//có thể viết gộp :
// type ColorKey = keyof typeof COLORS
//bám dính vào obj -> obj thay đổi là type sẽ update key theo\

//Ý nghĩa :
//selector và test data -> thay đổi liên tục

// const loginPage = {
//     userName : '#user',
//     password: '#pass',
//     submitBtn : '#login-btn'
// } as const

// type LoginField = keyof typeof loginPage

// async function fill(field: LoginField, value: string) {
//     console.log(`Fill ${loginPage[field]}, ${value}`);
// }

// fill('userName', 'neko123')

//VD : Quản lí danh sách API endpoint
const API_ROUTES = {
    LOGIN: "/api/auth/login",
    REGISTER:"/api/auth/register",
    PROFILE: "/api/auth/profile"
} as const


type ApiRoutesType = typeof API_ROUTES;
//TH A : Lấy ds key 
type RouteKey = keyof typeof API_ROUTES

//TH B : Lấy ds value
//biến kiểu dữ liệu -> thế giới kiểu qua typeof
//lấy keyof typeof của API_Route -> bộ key
//từ bộ key -> dùng để tra giá trị của obj -> lấy ra value tương ứng
type RouthPath = typeof API_ROUTES[keyof typeof API_ROUTES]
//-> typeof OBJ [keyof typeof OBJ]
//Lợi ích:
function goTo(path: RouthPath) {}
goTo('')

//GENERIC TYPE 
function boSoVaoHop(x: number) : number {
    return x
}

function boStringVaoHop (x: string) : string {
    return x;
}

function boCaiGiCungDuoc(x: any) : any {
    return x
}

const kq = boCaiGiCungDuoc(200)
//hạn chế dùng any

//Sinh ra 1 kiểu là generic<T> -> Tạo ra 1 cái biến đại diện cho type ( thường đặt tên là T)
//Nó hoạt động như sau : user ném vào type gì, hàm sẽ ghi nhớ type đó là T , hàm trả về kết quả cũng là T

function caiHopThanKy<T>(data : T) : T {
    return data
}

const so = caiHopThanKy(100)
const chu = caiHopThanKy("abcd");


//Cú pháp generic
//trong func (arrow ) thì generic đặt trc dấu ngoặc tròn
const getFirstItem = <T>(arr: T[]) : T | undefined => {
    return arr[0]
}

const n1 = getFirstItem(["1","2", "3"])
const n2 = getFirstItem([4,5,6])


//generic trong interface( rất hay dùng trong API)
interface ApiResponse<Data> {
    status: number;
    message: string;
    data: Data
}

//định nghĩa data cụ thể
interface User {
    id: number;
    name: string
}
interface Product {
    sku: string;
    price: number
}

//sử dụng
const userRes: ApiResponse<User> ={
    status: 200,
    message: "Success",
    data: {
        id: 1,
        name: 'Tung'
    }
}

const productUser : ApiResponse<Product> = {
    status: 200,
    message: "Success",
    data : {
        sku: "IP15",
        price: 300
    }
}

//generic trong class 
//class TenClass<T> {}

//Generic trong type cú pháp tương tự vs interface, nhưng thường dùng cho các cấu trúc dữ liệu đơn giản
//vdu như phân trang , hoặc các cặp giá trị

type PaginatedList<T> = {
    items: T[];
    total: number;
    page: number
}

type Student = {id: number, name: string}
const studentList : PaginatedList<Student> = {
    items : [{id: 1, name: 'Tung'}],
    total: 20,
    page: 1
}

//Generic constrainst ( ràng buộc )
//Mình muốn kiểu T phải thỏa mãn điều kiện nào đó , sẽ viết thêm extends
function logLength<T>(arg: T) {
    console.log(arg.length); //-> lỗi
}
interface HasLength {
    length: number
}

function logLength1<T extends HasLength>(arg: T) {
    console.log(arg.length);
}

logLength1('hello world')
logLength1([1,2,3])
logLength({length: 2, value: "abc"})
logLength1(123) //-> lỗi

//Cách viết khác:
function logLength2<T extends {length: number}>(arg: T) {
    console.log(arg.length);
}

function upperCase<T extends string> (s: T) {
    return s.toUpperCase()
}

upperCase('abc')
upperCase(123) //-> lỗi

type RESULT = "PASS" | "FAIL" | "SKIP"
function ghiKetQua<T extends RESULT>(status: T) {
    console.log(status);
}

ghiKetQua('')
//T extends X = "bất kì gtri nào thuộc kiểu T đều phải đc dùng ở chỗ cần kiểu X", tức là T là 1 tập con của X

function xuLy<T extends {id: number} & {name: string}>(item : T) {
    console.log(item.id);
    console.log(item.name);
    
}

//Generic mặc định ( default type)
//Ý nghĩa : nếu ng gọi ko chỉ định T, thì coi như T là kiểu mặc định này
//nó giúp mình vừa giữ đc tính linh hoạt của generic, vừa ko bắt ng dùng phải gõ type ở trường hợp phổ biến

interface StorageBox<T = string> {
    item: T
}

const box1 : StorageBox = {item: "hello"}
const box2 : StorageBox<number> = {item : 2}

//Generic với nhiều tham số 
//Thực tế 1 hàm hoặc 1 type thường sẽ giữ nhiều mối  hiệu kiểu cùng lúc
//dữ liệu đầu vào 1 kiểu , dữ liệu đầu ra 1 kiểu khác
//response thành công trả về user, lỗi trả về api error
//-> lúc này ta dùng nhiều tham số <T, U> , <TInput, TOutput> , <TData, TError>

//tạo 1 hàm makePair -> nhận 2 giá trị bất kì và trả về kiểu tuple [first, second] : 
//TS phải nhớ vị trí thứ nhất là gì và vị trí thứ 2 là kiểu gì

function makePair<TFirst, TSecond>(first: TFirst, second: TSecond) : [TFirst, TSecond] {
    return [first, second]
}

const pair1 = makePair("hello", 123)
console.log(pair1[0].toUpperCase());
console.log(pair1[1].toFixed(2));

const pair2 = makePair(true, {id: 1, name: 'neko'})
console.log(pair2[0] === true);
console.log(pair2[1].name);


//API trả về thành công hoặc thất bại
//-------
interface ApiError {
  code: number;
  message: string;
}

type ApiSuccess<Tdata> = {
  success: true;
  data: Tdata;
  error: null;
};

type ApiFailure<TError> = {
  success: false;
  data: null;
  error: TError;
};

type ApiResult<TData, TError = ApiError> =
  | ApiSuccess<TData>
  | ApiFailure<TError>;

//Api dang nhap

interface User3 {
  id: number;
  email: string;
  role: "admin" | "user";
}

interface LoginError {
  field: "email" | "password";
  reason: string;
}

const sucessRes: ApiResult<User3, LoginError> = {
  success: true,
  data: { id: 1, email: "2", role: "admin" },
  error: null,
};

const failedRes: ApiResult<User3, LoginError> = {
  success: false,
  data: null,
  error: {
    field: "email",
    reason: "sai email",
  },
};

function printLoginResult(result: ApiResult<User3, LoginError>) {
  if (result.success) {
    //Ts biết result.data là user
    console.log(result.data.role);
    console.log(result.data.id);
  } else {
    console.log(result.error.reason);
  }
}
