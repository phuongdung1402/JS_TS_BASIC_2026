//Triết lý typescript
//Trong TS chta phải mô tả hình dạng cho mọi dữ liệu bằng type hoặc interface 
//Nguyên tắc : mọi object mọi hàm , mọi API response phải có hợp đồng dữ liệu viết bằng interface hoặc type
//Người tạo dữ liệu phải tạo đúng shape (đủ field, đủ kiểu)
//Người dùng đc TS đảm bảo : field nào tồn tại, có thể thiếu hay ko , kiểu gì 

//1.Interface 
//Giống như bản thiết kế (nghiêng về hình dạng)

//Khai báo interface
interface UserTest {
    id: number;
    name: string;
    email: string;
    age? : number;
    readonly createdAt : Date;
}

const user : UserTest = {
    id: 1,
    name: 'neko',
    email: 'neko@gmail.com',
    createdAt: new Date()
}
//gán lại 
// user.createdAt = new Date() -> lỗi
// console.log(user);


// function greet(user: UserTest) : string {
//     return  `Hello ${user.name} , email : ${user.email}`
// }
// console.log(greet(user));

//Khai báo method trong interface
//C1 : Dùng shorthand
//C2 : Dùng arrow func

interface Calculator {
    //C1 : Cách phổ biến, khuyên nên dùng
    add(a: number, b: number): number;
    subtract(a: number, b:number): number;

    //C2 : ít dùng
    multiply : (a: number, b: number) => number;
    divide : (a: number, b: number) => number
}

const calc : Calculator = {
    add(a,b) {
        return a+b
    },

    subtract(a,b) {
        return a -b 
    },
    multiply : (a,b) => a*b,
    divide : (a,b) => a/b,
}

// //Nhưng mình cũng có thể implement ngược lại vẫn hợp lệ
const calc2 : Calculator = {
    add : (a,b) => a+b ,

    subtract(a,b) {
        return a -b 
    },
    multiply(a,b) {
       return a*b
    } ,
    divide : (a,b) => a/b,
}

console.log(calc2.add(4,5));
console.log(calc2.divide(100,5));


// //
// interface UserService {
//     baseUrl : string;
//     getUser(id: number) : Promise<{name: string; email: string}>;
// }

// const userService : UserService = {
//     baseUrl: 'http',
//     async getUser(id) {
//         return {
//             name: 'abc',
//             email: '123'
//         }
//     }
// }

//Extends 
//Tạo interface con từ cha, kế thừa toàn bộ thuộc tính và thêm cái mới
//Kế thừa đơn
// interface User2 {
//     id: number;
//     name: string;
// }

// interface Admin extends User2 {
//     role: 'admin';
//     permisson : string []
// }
// const admin : Admin = {
//     id: 1,
//     name: 'abc',
//     role: 'admin',
//     permisson : ['ab','bc','xyz']
// }

//Kế thừa đa 
// interface HasTimeStamp {
//     createdAt: string;
//     updatedAt: string;
// }

// interface HasSoftDelete {
//     deletedAt: string | null;
//     isDeleted: boolean
// }

// interface SuperAdmin extends Admin, HasTimeStamp, HasSoftDelete {
//     secretKey : string
// }

// const superAdmin : SuperAdmin = {
    
// }
//Lưu ý :
//Khi interface con khai báo lại 1 key đã có ở cha, TS bắt buộc kiểu mới phải tương thích (gán được ) với kiểu cha
// interface Base {
//     id: number;
//     status : string
// }

// interface Broken extends Base {
//     id: string
// }

// interface Narrowed extends Base {
//     id: 1|2|3;
//     status: "active" | "off"
// }

//Cách sử dụng interface extends thực tế
//Mô tả data, api entities kế thừa nhau
// interface BaseEntity {
//     id: number;
//     createdAt : string;
//     updateAt: string ;
// } 
// interface User4 extends BaseEntity {
//     name: string;
//     email: string
// }
// interface Product extends BaseEntity {
//     title : string;
//     price: number
// }
// async function fakeGetUser (id: number) : Promise<User4> {
//     return {
//         id: id,
//         createdAt: '31/05/2026',
//         updateAt: '01/06/2026',
//         name: "user-name-4",
//         email: "fakeuser4@gmail.com"
//     }
// } 

// async function runTest() {
//     const user = await fakeGetUser(1)
//     console.log(user.email);
    
// }

// runTest()
//Best Practice: Kết hợp interface làm hợp đồng, class implement
// interface PageObject {
//     url : string;
//     goTo() : Promise<void>
//     isLoaded() : Promise<boolean>
//    // takeScreenshot(name: string) : Promise<void>
// }

// class FakeBrowser {
//     async open(url: string) {
//         console.log(`Mo ${url}`);
//     }
// }

// //implement sử dụng trong class nếu muốn sử dụng interface
// class BasePage implements PageObject {
//     url =  '/';
//     constructor(protected browser: FakeBrowser) {}

//     async goTo(): Promise<void> {
//         await this.browser.open(this.url)
//     }

//     async isLoaded() {
//         return true;
//     }
//     // async takeScreenshot(name: string): Promise<void> {
        
//     // }
// }

//Page kế thừa code từ BasePage (class extends ) và gián tiếp tuân theo pageobject interface

// class LoginPageObj extends BasePage {
//     url = "/login";
//     async isLoaded() {
//         console.log('Kiem tra form login');
//         return true
//     }
// }

// class ProductPageObj extends BasePage {
//     url = "/login";

// }

//Pattern này kết hợp 3 vai trò
//interface PageObject : vai trò hợp đồng , bắt buộc mọi page phải có url, goTo, isLoad
//class BasePage : code dùng chung viết 1 lần logic 
//class extends từ basepage : page cụ thể : dùng lại code chung + override hành vi
//-> Pattern này sẽ đảm bảo 3 lợi ích lớn : làm POM 
//1.interface đảm bảo tính nhất quán-> ko page nào quên method

//class ProductPage extends BasePage (thieu isLoad)
//nhờ hợp đồng này, cả team chắc chắn page nào cũng có đủ method chuẩn

//bỏ code này mọi page ko cần viết lại hàm goto và isloaded
//khi hợp đồng thay đổi TS sẽ báo hết chỗ cần sửa , ví dụ thêm method
//Quy tắc interface lo phần "phải có gì" (an toàn kiểu, thống nhất team) .Còn class extends lo phần (làm ntn) -> tái sử dụng code

//Declaration mergin : gộp khai báo (Độc quyền chỉ có ở interface)
//Khi khai báo 2 interface cùng tên, TS sẽ tự động gộp lại thành 1
// interface TestContext {
//     baseUrl : string
// }

// interface TestContext {
//     authToken : string
// }

// const ctx : TestContext = {
//     baseUrl: "abc",
//     authToken : "bv"
// }

//Chú ý :1 class có thể implement nhiều interface
// interface Loggable {
//     log() : void
// }

// interface Serializable {
//     toJSON(): string
// }

// class ApiService implements Loggable, Serializable {
//     log(): void {
//         console.log('Log: abc');
        
//     }

//     toJSON(): string {
//         return 'abc'
//     }
// }

// const api = new ApiService()
// api.log()

//2.TYPE ALIAS
//Mình có thể dán nhãn lên bất kì thứ gì (obj, string, number, function, type)
//nhưng nhãn dán ko thể sửa sau khi viết (declaration merging)
//có thể tổ hợp nhiều thứ (union)

// type Email = string
// type Age = number
// type User5 = {name: string; email: Email; age: Age}

// let UserId : User5 = {
//     name: "abc",
//     email: "abc",
//     age : 10
// }

//Interface chỉ tạo shape cho object
//Type có thể đặt tên cho bất kì thứ gì, kiểu dữ liệu gì mình mong muốn
//Độc quyền của type : Alias cho function đơn lẻ 
// type MathFn = (a: number, b: number) => number;
// const add : MathFn = (a,b) => a+b

// console.log(add(3,5));

//type kiểu function rất hay sử dụng trong callback function
//callback types
// type OnSuccess = (data: {id: number, name: string}) => void
// type OnError = (error : Error) => void

// type ApiCallBack = {
//     onSuccess : OnSuccess;
//     onError: OnError
// }

// function fetchUser(id: number, callback : ApiCallBack) {
//     try {
//         callback.onSuccess({id, name: "neko"})

//     }catch(err) {
//         callback.onError(err as Error)
//     }
// }

// fetchUser(1, {
//     onSuccess : (data) => console.log(`Có ${data.name}`),
//     onError: (err) => console.log(err.message)
// })

//Union types
//Đây là thứ interface ko thể làm được

// type Status = "active" | "inactive"
// type ID = string | number
// type TestStatus = "passed" | "failed" | "skipped"

// function getStatusResult(status : TestStatus) : string {
//     switch (status ) {
//         case 'passed' : return 'passsss'
//         case 'failed' : return 'failedddd'
//         case 'skipped': return 'skippedddd'
//     }
// }

//Gộp kiểu : (intersection type & )
//Dùng gộp nhiều type thành 1
//ví dụ
// type User6 = {
//     id: number;
//     name: string
// }

// type HasTimeStampe = {
//     createdAt : string
// }

// type AdminUser = User6 & HasTimeStampe & {
//     role : "admin";
//     permission : string []
// }
// const admin : AdminUser = {

// }

// //Khác key
// type A1 = {id: string}
// type B1 = {email: string}
// type C1 = A1 & B1

// //Trùng key , cùng kiểu 
// type A2 = {id: number}
// type B2 = {id: number}
// type C2 = A2 & B2

//Trùng key , khác kiểu -> tránh trường hợp này
// type A3 = {id: string}
// type B3 = {id: number}
// type C3 = A3 & B3
// //Type của thằng C3 -> kiểu never
// const c3 : C3 = {id: 1}

// interface IA {
//     id : number
// }

// interface IB {
//     id: string
// }

// interface IC extends IA, IB {

// }

//Kết luận : Các kiểu chỉ type làm được
//Đây là những thứ interface ko thể mô tả

//primitive alias
// type ID2 = string | number

// //tuple
// type Coordinate = [number, number]

// //function type
// type CallBack = (error : Error | null, data : string) => void

//QUY TẮC CHỌN 
//Câu hỏi duy nhất : Mình đang mô tả 1 object shape hay 1 thứ khác
//Nếu là object shape -> dùng interface mặc định
//Ko phải object shape (bắt buộc dùng type )
//union type
//tuple
//function : callback
//Partial, pick , omit
//Trong TS handbook : mặc định dùng interface , cái nào interface ko dùng đc mới dùng type
//Với obj shape đừng quá lo về việc chọn sai -> interface vs type gần như thay thế đc cho nhau
