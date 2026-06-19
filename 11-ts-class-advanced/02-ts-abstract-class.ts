
//ABSTRACT CLASS
//Abstract class tồn tại trong TS : nó là 1 class đang dang dở - có 1 phần code, nhưng có 1 phần chưa code(abstract method)
//class con hoàn thành phần còn thiếu và abstract class ko thể khởi tạo = từ khóa new

// abstract class Vehicle {
//     constructor(public brand: string, public year: number) {}

//     //concrere methods - có code sẵn, class con dùng luôn
//     age() : number {
//         return new Date().getFullYear() - this.year
//     }

//     info(): string {
//         return `${this.brand} - ${this.year} - ${this.age()} tuổi`
//     }

//     //abstract method - ko có code , class con phải tự viết
//     abstract maxSpeed() : number
// }

//ko thể khởi tạo instance hay object từ abstract class
//const v = new Vehicle() //lỗi -> ko thể khởi tạo = từ khóa new

// class ElectricCar extends Vehicle {
//     constructor(brand: string, year: number ) {
//         super(brand, year)
//     }

//     maxSpeed(): number {
//         return 300;
//     }
// }
// const tesla = new ElectricCar('testla model 3', 2023)
// console.log(tesla.info());

//ví dụ thực tế
//ví dụ làm auto cho 10 trang : login, dashboard, cart, checkout,..
//mỗi trang cần có các method ví dụ như navigate() , mở url , takeScreenshot 
//get fullUrl(baseURL + path), nhưng mỗi trang lại có tiltle khác nhau, cách kiếm tra isLoad khác nhau
//nội dung mỗi trang khác nhau như getMainContent()
//nếu ko có abstract class bạn sẽ phải viết navigate 10 lần
//abstract class giải quyết triệt để vấn đề này, viết 1 lần basepage, 10 trang dùng chung
//còn những phần khác nhau, thì ép mỗi trang tự định nghĩa, thiếu là TS báo lỗi, ko lo quên

// abstract class BasePage {
//     //concrete : có sẵn class con dùng luôn
//     protected baseUrl = "https://autoneko.com";

//     constructor(protected path: string) {}

//     //concrete method 
//     getFullUrl () {
//         return `${this.baseUrl} ${this.path}`
//     }

//     navigate() {
//         console.log(`Chuyển tới trang ${this.getFullUrl}`);
//     }

//     takeScreenshot(name: string) {
//         console.log(`Screenshot ${name} - ${this.getFullUrl()}`);
        
//     }
//     //abstract : class con tự viết
//     //mỗi page tải xong có cách kiểm tra load riêng
//     abstract isLoaded() : boolean;

//     //mỗi page có title riêng
//     abstract getTitle() : string;

//     abstract getMainContent() : string;
// }

// class LoginPage extends BasePage {
//     constructor() {
//         super("/login")
//     }

//     isLoaded() : boolean {
//         console.log('kiem tra username da hien thi');
//         return true;        
//     }

//     getTitle(): string {
//         return "Neko - ĐĂNG NHẬP"
//     }

//     getMainContent(): string {
//         return "FROM ĐĂNG NHẬP"
//     }

//     async login(user: string, pass: string) : Promise<void> {
//         this.navigate();
//         console.log(`nhap username ${user}`);
//         console.log(`nhap password ${pass}`);
//         this.takeScreenshot("after login click")
//     }

// }

// const loginPage = new LoginPage()
// console.log(loginPage.login("neko", "12345"));
// console.log(loginPage.getMainContent());

//Thực tế tại sao lại ít regular class (class bth làm cha)
//
// class BasePage {
//     navigate() : void {
//         console.log('navigate');
//     }

// }

// class LoginPage extends BasePage {

// }

// const badbasepage = new BasePage()
// badbasepage.navigate()
//sai về mặt thiết kế
//=> basepage tạo ra vs mục đích là khuôn mẫu cho các trang web cụ thể  như login, dashboard, ... bản thân ko đại diện cho 1 
//trang web thật nào cả
//Nguyên tắc 1 class tồn tại chỉ để làm bản thiết kế cho class khác thì nên là abstract. 


// interface PageInterface {
//     navigate(): void ;

// }
// class LoginPage implements PageInterface {
//     navigate(): void {
//         console.log('navigate');
        
//     }
// }

//Lưu ý:
//Khi nào interface nên làm cha:
//1.ko có code chung để chia sẻ (mỗi implement 1 kiểu)
// interface DataService<T> {
//     getAll() : Promise<T[]>;
//     getById(id: string) : Promise<T> 
// }

// class UserApiService implements DataService<User> {
//     async getAll() : Promise<User[]>
// }

// class ProductGraphQLService implements DataService<Product> {
//     async getAll() : Promise<Product[]>
// }

//code fetch dữ liệu của user api và product hoàn toàn khác nhau , ko có gì để trừu tượng hóa chung -> interface là lựa chọn hợp lí

//2.Cần implement nhiều hợp đồng ( đa kế thừa )
// interface Loggable {
    
// }

// interface Configurable {}

// class DatabaseService implements Loggable, Configurable {}

//Khi nào abstract class nên dùng
//1. có code chung muốn chia sẻ cho con - đây là lí do đầu tiên chta sẽ chọn
//2. state chung (field, private member)
//3. instanceof : chỉ check đc khi sử dụng abstract (classcon instanceof classcha ) -> true

//Combo : abstract class + implement interface
//Tại sao : 
//interface : vai trò là khai báo vs mọi ng là : class này có thể làm đc những việc này
interface Runnable {
    run() : Promise<void>;
}

interface Verifiable {
    verify() : boolean
}

interface Screenshotable {
    takeScreenshot(name: string) : void 
}

abstract class BaseTest {
    private startedAt : Date = new Date()
    private result : string [] = []
    constructor(protected testName : string) {

    }

    //concrete method : code miễn phí, mọi test con dùng chung
    setUp(): void {
        console.log(`SETUP mo browser , clear cache`);
    }

    tearDown(): void {
        console.log('Dong browser, dọn dẹp...');
    }

    protected logResult (status: 'PASS' | 'FAIL', detail? : string) : void {
        const entry = `[${this.testName}] ${status} ${detail ? ` - ${detail}` : ""}`
        this.result.push(entry)
        console.log(`entry: ${entry}`);
    }

    //concrete method - do tgian chay
    protected getDuaration() : number {
        return Math.floor(Date.now() - this.startedAt.getTime()) / 1000
    }

    //chỉ truy cập trong basetest
    private getInternalConfig() : string {
        return "browser =chromium"
    }

    //abstract : class con phải tự viết
    abstract execute() : Promise<void>

    abstract getTestData() : string;
}

// class LoginTest extends BaseTest implements Runnable, Verifiable, Screenshotable {
//     private passed = false;

//     constructor() {
//         super("Login test")
//     }

//     async execute(): Promise<void> {
//         console.log('Nhập username và password');
//         this.passed = true
//     }

//     getTestData() : string {
//         return 'username = neko, password=123'
//     }

//     async run() : Promise<void> {
//         this.setUp();
//         await this.execute();
//         this.logResult("PASS" , `${this.getDuaration()}`)
//         this.tearDown()
//     }

//     verify(): boolean {
//         return this.passed
//     }

//     takeScreenshot(name: string): void {
//         console.log(`Screenshot : ${name}`);
        
//     }
// }



// async function runTest() {
//     const loginTest = new LoginTest();
//     await loginTest.run();
//     console.log(`Xác minh kết quả :${loginTest.verify()  ? 'Đạt' : 'Trượt'}`);
//     loginTest.takeScreenshot("abc")
    
// }

// runTest()

//Lý do tại sao ko đưa luôn interface vào làm abstract method:
//1. Lý do 1 : interface có thể tái sử dụng mà ko cần extends
//Nếu 2 class thuộc 2 hệ khác nhau thì ta nên dùng interface để đáp ứng sự tái sự dụng
// class ApiHealthCheck implements Verifiable {
//     verify(): boolean {
//         return true;
//     }
// }

// //2. Lý do 2 : interface cho phép 1 class có nhiều vai trò
// class CheckoutTest extends BaseTest implements Runnable, Verifiable {

// }
//mỗi 1 interface đóng 1 vai trò riêng
//3. Lý do 3 : interface giúp cho việc mock testing dễ hơn
//mock testing : tạo môi trường ảo, fake số liệu ( dùng test api )
//test UI : ko dùng mock testing

// regular class ko thể làm class cha tốt nếu trong các trường hợp
//1.class con phải tuân theo 1 số quy tắc gì đó (implement abstract class)
//2.abstract class : ko cần phải tạo instance - new ( sai logic )
// class BasePage7 {
//     baseUrl = "abc.com";

//     constructor(protected path: string) {}
//     navigate() : void {}

//     //abstract isLoaded()

// }

// class LoginPage8 extends BasePage7 {
//     isLoad() : boolean {
//         return true
//     }

// }

// class CartPage extends BasePage7 {
//     addToCart() : void {}
// }

//Regular class có thể làm cha khi : đứng 1 mình , có ý nghĩa.
//regular class làm cha khi cha đã hoàn chỉnh 100%, tự dùng đc 1 mình, và con chỉ thêm các tính năng chứ ko cần override
// class HttpClient {
//     constructor(protected baseUrl: string) {}

//     async get<T>(path: string) : Promise<T> {
//         return {} as T
//     }
// }

// class AuthHttpClient extends HttpClient {
//     constructor(baseUrl: string, private token: string) {
//         super(baseUrl)
//     }

//     //thêm method mới mà cha ko có
//     async getWithAuth<T>(path: string) : Promise<T> {
//         return this.get<T>(path)
//     }
// }

// //Cả cha và con đều dùng độc lập
// //cha dùng 1 mình api test đơn giản (ko cần auth)
// const simpleClient = new HttpClient("abc")
// //await simpleClient.get("abc")

// const authClient = new AuthHttpClient("abc", "tokenAbc")

//KẾT LUẬN :
//Interface làm cha : khi ko có code chung chia sẻ, và phải cần đa kế thừa
//Abstract class làm cha : khi mong muốn ép class con cần có các method cần có . class cha ko có ý nghĩa khi đứng 1 mình